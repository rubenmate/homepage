import { Menu } from "@headlessui/react";
import { IoMenu } from "react-icons/io5";

function Drawer() {
    return (
        <Menu>
            <Menu.Button>
                <div className="flex items-center text-2xl rounded-md p-2 justify-center hover:bg-neutral-600 hover:text-neutral-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-neutral-50">
                    <span className="sr-only">Open main menu</span>
                    <IoMenu />
                </div>
            </Menu.Button>
            <Menu.Items className="fixed top-[60px] right-0 flex flex-col bg-white rounded-md p-1 border border-slate-200">
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${
                                active && "bg-primaryLight text-white rounded-md"
                            } py-2 px-4 `}
                            href="/blog"
                        >
                            Blog
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${
                                active && "bg-primaryLight text-white rounded-md"
                            } py-2 px-4`}
                            href="/contact"
                        >
                            Contact
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
}

export default Drawer;