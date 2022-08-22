import { Menu } from "@headlessui/react";
import { IoLogoGithub, IoMenu, IoLogoRss } from "react-icons/io5/index";

function Drawer() {
    return (
        <Menu>
            <Menu.Button>
                <div
                    className="flex items-center text-2xl rounded-md p-2 justify-center 
                    border border-gray-200 dark:border-gray-800
                    hover:bg-neutral-600 hover:text-neutral-100 focus:outline-none focus:ring-2 
                    focus-ring-inset focus:ring-neutral-50"
                >
                    <span className="sr-only">Open main menu</span>
                    <IoMenu />
                </div>
            </Menu.Button>
            <Menu.Items
                className="fixed top-[60px] right-0 mr-2 flex flex-col bg-white 
                dark:bg-blackish rounded-md p-1 border border-slate-200 dark:border-slate-800"
            >
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active &&
                                "bg-primaryLight dark:bg-primaryDark text-white dark:text-black rounded-md"
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
                            className={`${active &&
                                "bg-primaryLight dark:bg-primaryDark text-white dark:text-black rounded-md"
                                } py-2 px-4`}
                            href="/contact"
                        >
                            Contact
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active &&
                                "bg-primaryLight dark:bg-primaryDark text-white dark:text-black rounded-md"
                                } flex items-center space-x-1 py-2 px-4`}
                            href="https://github.com/rubenmate"
                            target="_blank"
                        >
                            <IoLogoGithub />
                            <span>GitHub</span>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active &&
                                "bg-primaryLight dark:bg-primaryDark text-white dark:text-black rounded-md"
                                } flex items-center space-x-1 py-2 px-4`}
                            href="/rss.xml"
                        >
                            <IoLogoRss />
                            <span>RSS</span>
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
}

export default Drawer;
