---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
---

The parataxis relation (from Greek for “place side by side”) is a relation between the main verb of a clause and other sentential elements, 
such as a sentential parenthetical, a clause after a “:” or a “;”, 
or two sentences placed side by side without any explicit coordination or subordination.

~~~ sdparse
Kitabı okudum , uyudum . \n I read the book , slept.
parataxis(uyudum, okudum)
~~~

~~~ sdparse
Kitabı okudun , değil mi ? \n You read the book , aren't you ?
parataxis(okudun, değil)
~~~

~~~ sdparse
Sabah , babam diyor ki , erken kalkacakmışız . \n In the morning, my father says, we have to get up early
parataxis(kalkacakmışız, diyor)
~~~
