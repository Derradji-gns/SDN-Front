"use client"
import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "../components/ui/dialog"
import { Field, FieldGroup } from "../components/ui/field"
import { Label } from "../components/ui/label"

export default function DialogButtonDevice({text}) {



  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newDevice = {
      id : formData.get("id"),
      label : formData.get("label")
    }

  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Devices`, {

      method : "POST",
      headers: { "Content-Type": "application/json" },
      body : JSON.stringify(newDevice)


    })
    const data = await res.json();
    e.target.reset();
    

  } catch (err) {
    console.log(err);
    

  }


  };
    return(
        <div className="flex justify-end w-full h-auto ">
            <Dialog>
              
                <DialogTrigger asChild>
                  <Button>{text}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle>Add a Device</DialogTitle>
                    <DialogDescription className="text-red-300">
Device name must be unique
                    </DialogDescription>
                  </DialogHeader>
                  <FieldGroup>
                    <Field className="mt-4">
                      <Label htmlFor="name-1">Device Name</Label>
                          <input
                            name="id"
                            type="text"
                            data-slot="input"
                            required
                            className=
                              "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                    </Field>
                                        
                                        
                    <Field className="mb-4">
                      <Label htmlFor="username-1">Label</Label>
                       <input
                            name="label"
                            type="text"
                            data-slot="input"
                            className=
                              "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                    </Field>

                  </FieldGroup>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                  </form>
                </DialogContent>
              
            </Dialog>
        </div>

    );
}