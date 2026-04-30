'use client'

import { contactSchema, contactSchemaType } from '@/schema/contact.schema'
import { contact_me } from '@/services/contact.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShieldPlus } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Spinner from '../common/spinner'
import Icon from '../icon'
import { Button } from '../ui/button'
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '../ui/field'
import { Input } from '../ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '../ui/input-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

function ContactForm() {
  const searchParams = useSearchParams()

  const form = useForm<contactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      request_type:
        (searchParams.get(
          'request_type',
        ) as contactSchemaType['request_type']) || 'partnership',
      priority:
        (searchParams.get('priority') as contactSchemaType['priority']) ||
        'low',
      message: searchParams.get('message') || '',
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: contactSchemaType) => {
    try {
      setIsSubmitting(true)
      const response = await contact_me(data)
      if (response) {
        toast.success('Message sent! I’ll get back to you shortly.')
        form.reset({
          email: '',
          message: '',
        })
      }
    } catch (error) {
      const error_message =
        (error as unknown as Error).message || 'Error submitting contact form'

      toast.error(error_message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="p-2 md:p-6" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-6">
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel className="uppercase">Email</FieldLabel>
              <FieldContent>
                <Input
                  id="email"
                  placeholder="Enter email address"
                  {...field}
                />
              </FieldContent>

              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />

        <div className="max-md:space-y-6 md:flex md:gap-4 lg:gap-6">
          <Controller
            control={form.control}
            name="request_type"
            render={({ field, fieldState }) => (
              <Field className="flex-1">
                <FieldLabel className="uppercase">Request_Type</FieldLabel>

                <FieldContent>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </FieldContent>
                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="priority"
            render={({ field, fieldState }) => (
              <Field className="flex-1">
                <FieldLabel className="uppercase">Priority_Level</FieldLabel>

                <FieldContent>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select priority level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </FieldContent>

                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />
        </div>

        <Controller
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel className="uppercase">Message</FieldLabel>

              <FieldContent>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    id="message"
                    placeholder="Enter request details..."
                    className="min-h-48 resize-none"
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value?.length}/200 characters
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>

              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 max-md:hidden">
            <Icon Icon={ShieldPlus} size={10} className="text-primary" />
            <p className="uppercase">Secure_Channel</p>
          </div>

          <Button
            type="submit"
            variant="accent"
            className="w-full rounded-none px-8 py-3 md:w-fit"
            disabled={isSubmitting}
          >
            Submit_ticket
            {isSubmitting && <Spinner />}
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}

export default ContactForm
