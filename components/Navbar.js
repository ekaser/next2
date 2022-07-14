import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {
    const { user, username } = useContext(UserContext);

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/*User is signed-in and has username */}
                {username && (
                    <>
                        <l1 className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </l1>
                        <l1>
                            <Link href={'/${username}'}>
                                <img src={user?.photoURL} />
                            </Link>
                        </l1>
                    </>
                )}
                {/*user is not signed in OR has not created username*/}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}