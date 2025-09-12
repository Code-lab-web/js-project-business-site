<Form
  method="post"
  action="destroy"
  onSubmit={(event) => {
    if (
      !confirm(
        "Please confirm you want to delete this record."
      )
    ) {
      event.preventDefault();
    }
  }}
>
  <button type="submit">Delete</button>
</Form>
export async function action({ params }) {
    throw new Error("oh dang!");
    await deleteContact(params.contactId);
    return redirect("/");
  }