import { themeColors } from "../constants/colors"

export default function ProjectForm(){
    return (
        <form className='fixed top-[25%] left-[25%] w-100 border-1 rounded-xl p-5 z-3' style={{
            backgroundColor: themeColors.dark.sectionBg
        }}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 dark:border-white/10">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                                Project Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                                Project Description
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street-address"
                                    name="street-address"
                                    type="text"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:focus-visible:outline-indigo-500"
                >
                    Add
                </button>
            </div>
        </form>
    )
}