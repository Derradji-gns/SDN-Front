export default function page() {
    return (

        <div className="w-full h-full p-4">
            <h1 className="text-2xl">How it works ?</h1>
            <div className="w-full h-full mt-12">
            <p className="mt-4">- In <strong>Add Device</strong> page , add a device by passing an Id and label name for each device, Id must be unique and label name is the name that device will hold in the GUI topology .</p>
                        <p className="mt-4">- In <strong>Add Link</strong> page , add a Link by passing an Id, sourec device, target device, and link transmision informations for each device, Id must be unique and be sur that you give the correct name of device in Source and target inputs Id must be unique and label name is the name that device will hold in the GUI topology .</p>
                                    <p className="mt-4">- after that , if you enter the informations in the correct way , network topology should appears in <strong>Topology page</strong>, you can apply SDN simulation on the current topology by clicking <strong>Apply SDN</strong>, then you will see the shortest path in animation mode in your topology  . </p>
                                                                        <p className="mt-4">- Just be noticed that you can aleardy find exiting from the previous user , because of the option of deleting Devices is not supporting in the current time .   </p>
                                                                        <p className="mt-4">For more informations or your feedBack you can contact me through my official website, link in the bottom of sidebar</p>
        </div></div>

    );

}
