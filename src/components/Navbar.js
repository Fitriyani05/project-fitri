function Navbar () {
    return (
<div className="navbar bg-violet-600">
      <div className="container flex items-center mx-auto">
        <div className="w-3/12">
          </div>
      <div className="w-6/12">
        <ul className=" nav nav-item flex justify-center space-x-10 py-16">
            <li>
              <a className="text-rose-800 text-lg text-opacity-60 font-semibold">Profile</a>
            </li>
            <li>
              <a className="text- text-lg text-opacity-60 font-semibold">Skills</a>
            </li>
            <li>
              <a className="text-pink text-lg text-opacity-60 font-semibold">Projects</a>
            </li>
            <li>
              <a className="text-pink text-lg text-opacity-60 font-semibold">Contacts</a>
            </li>
        </ul>
      </div>
      <div className="w-3/12">
        <div className="button text-center">
          <a className="font-semibold text-yellow-300 border border-yellow-300 rounded-full px-6 py-2">Kontak</a>
        </div>
      </div>
    </div>