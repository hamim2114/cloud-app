import { CheckIcon } from "@heroicons/react/outline";


const Card = () => {
    return (
        <div data-aos='fade-left' className="flex sm:mx-2 mx-8 ">
            <div>
                <CheckIcon className="w-7 mr-4 text-green-600"/>
            </div>
            <div>
                <h3 className="font-bold sm:text-lg">Notification</h3>
                <p className="sm:text-lg pt-2 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, velit perferendis! Fuga sit consequuntur id.</p>
            </div>
        </div>
    )
}

const AllInOne = () => {
    return (
        <section id="platforms" className="w-full sm:my-32 my-24">
            <div className="max-w-[1240px] mx-auto px-2">
                <h1 data-aos='zoom-out' className="text-5xl font-bold text-center">All-In-One Platform</h1>
                <p data-aos='fade-up' className="sm:text-2xl py-8 text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
                nostrum tempore.</p>

                <div className="grid sm:grid-cols-4 gap-4 pt-4">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </section>
    );
};

export default AllInOne;