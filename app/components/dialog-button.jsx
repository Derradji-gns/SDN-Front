"use client"
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
import { Button } from "./ui/button";

export default function DialogButton({text}) {

  const handleClick = async (e) => {
  e.preventDefault();

   const formData = new FormData(e.target);

   
   
   
  const newLink = {
    id : formData.get("id"),
    source: formData.get("source"),
    target: formData.get("target"),
    bw: Number(formData.get("bw")),
    lt: Number(formData.get("lt"))
  };

  

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Links`, {
      method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLink),
      });
      e.target.reset();
      
      
  }  catch (err) {
    console.log(err);
    

  }
}
  
    return(
        <div className="flex justify-end w-full h-auto ">
            <Dialog>
                <DialogTrigger asChild>
                  <Button>{text}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <form onSubmit={handleClick}>
                  <DialogHeader>
                    <DialogTitle>Add a link</DialogTitle>
                    <DialogDescription className="text-red-300">
                      Link id must be unique , source and target should correspond to Device's names
                    </DialogDescription>
                  </DialogHeader>
                  <FieldGroup>
                    <Field className="mt-4">
                      <Label htmlFor="name-1">Link id</Label>
                          <input
                          name="id"
                            type="text"
                            placeholder="ex : Link 1"
                            className=
                              "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                              required
                              
                          />
                    </Field>
                                        <Field>
                      <Label htmlFor="name-1">Source</Label>
                          <input
                          name="source"
                            type="text"
                            placeholder="ex : Router1"
                            className=
                              "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                    </Field>
                                        <Field>
                      <Label htmlFor="name-1">Target</Label>
                          <input
                            name="target"
                            type="text"
                            placeholder="ex : Router2"
                            className=
                              "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                    </Field>
                    <Field>
                      <Label htmlFor="username-1">Bandwidth (Mb)</Label>
                       <input
                            name="bw"
                            type="text"
                            placeholder="Bandwidth"
                            className=
                              "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                    </Field>
                                <Field className="mb-4">
                      <Label htmlFor="username-1">Latency (ms)</Label>
                       <input
                            name="lt"
                            type="text"
                            placeholder="Latency"
                            className=
                              "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                    </Field>
                  </FieldGroup>
                  
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline"> Cancel</Button>
                    </DialogClose>
                   <Button type="submit">Save</Button>
                   
                  </DialogFooter>
                  </form>
                </DialogContent>
              
            </Dialog>
        </div>

    );
  }