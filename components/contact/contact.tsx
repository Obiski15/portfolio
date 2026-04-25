import ContactForm from './contact_form'

function Contact() {
  return (
    <div className="space-y-8 p-4">
      <div className="border-border flex items-center justify-between border-b pb-4 [&>div]:space-y-1">
        <div>
          <h3 className="leading-6">operational_request_form.v1</h3>
          <p className="text-muted-foreground">
            Initiating secure communication link with OBI...
          </p>
        </div>

        <div className="hidden text-right uppercase md:block">
          <p className="leading-3.75">ticket_hash</p>
          <p className="text-accent">0xAF78B-992C</p>
        </div>
      </div>

      <ContactForm />
    </div>
  )
}

export default Contact
