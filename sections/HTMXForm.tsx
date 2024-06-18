import { useSection } from "deco/hooks/useSection.ts";

export interface HTMXProps {
    reminders: string[];
}

export const loader = async (
    props: HTMXProps,
    req: Request
) => {

    const contT = req.headers.get("content-type");

    if (contT !== "application/x-www-form-urlencoded") {
        return props;
    }
  
    const formData = await req.formData(),
          reminders = props.reminders,
          reminder = formData.get("reminder")?.toString();

    if (reminder){
        reminders.push(reminder)
    }

    return reminders;
}

export default function HTMXForm({
    reminders = []
}: HTMXProps) {
    return (
    <div className="bg-white px-4 border-2 border-green-300 rounded w-[100%] flex flex-wrap ">
        <>
            <form 
                class="container  md:p-10"
                hx-on="htmx:beforeRequest: disableForm, htmx:afterRequest: enableForm"
                hx-post={useSection({
                    props: {
                        reminders,
                    }
                })}
                hx-swap="outerHTML"
                hx-target="closest section"
                hx-indicator="#submitButton"
            >
                <label class="form-control ">
                    <div class="label">
                        <span class="label-text text-green-500">Reminder:</span>
                    </div>
                    <textarea 
                        name="reminder"
                        class="reminder textarea textarea-bordered h-24" 
                        required
                    />
                </label>
                <button 
                    id="submitButton"
                    class="btn mt-2"
                    type="submit"
                >
                    add reminder
                </button>
            </form>
            <div class="container">
                <ul class="flex gap-2 my-3" id="reminders">
                    {
                        reminders.map(reminder => (
                            <li class="bg-gray-100 rounded p-3" key={reminder}>
                                {reminder}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    </div>

    );
}