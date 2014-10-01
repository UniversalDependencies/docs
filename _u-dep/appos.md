---
layout: base
title: 'appos'
shortdef: 'appositional modifier'
---

## {{ page.title }}: {{ page.shortdef }}

An appositional modifier of a noun is a nominal immediately following
the first noun that serves to define or modify that noun. It includes
parenthesized examples, as well as defining abbreviations in one of
these structures.

~~~ sdparse
Sam , my brother , arrived
appos(Sam-1, brother-4)
~~~

~~~ sdparse
Bill ( John 's cousin )
appos(Bill-1, cousin-5)
~~~

~~~ sdparse
The Australian Broadcasting Corporation ( ABC )
appos(Corporation-4, ABC-6)
~~~

In case of more than one appositive nominal, all nouns should be marked as modifying the first noun, rather than being chained:

~~~ sdparse
Sam , my brother , John 's cousin , arrived
appos(Sam-1, brother-4)
appos(Sam-1, cousin-8)
~~~

*appos* is also used to link key-value pairs in addresses, signatures, etc. (see also the [list]() label):

~~~ sdparse
Steve Jones Phone: 555-9814 Email: jones@abc.edf
name(Steve-1, Jones-2)
list(Steve-1, Phone:-3)
list(Steve-1, Email:-5)
appos(Phone:-3, 555-9814-4)
appos(Email:-5, jones@abc.edf-6)
~~~
