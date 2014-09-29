---
layout: base
title: 'appos'
shortdef: 'appositional modifier'
---

## appos: appositional modifier

An appositional modifier of an NP is an NP immediately following
the first NP that serves to define or modify that NP. It includes
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

In case of more than one appositive NP, all NPs should be marked as modifying the first NP, rather than being chained:

~~~ sdparse
Sam , my brother , John 's cousin , arrived
appos(Sam-1, brother-4)
appos(Sam-1, cousin-8)
~~~


