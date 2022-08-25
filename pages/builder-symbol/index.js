import { BuilderComponent } from '@builder.io/react'

export default function EditBuilderSymbol() {
    return (
      <BuilderComponent
        model="symbol"
        options={{
          includeRefs: true,
        }}
      />
    )
  }
  