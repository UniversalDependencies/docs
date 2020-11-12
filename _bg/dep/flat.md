---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The [flat]() relation is one of three relations for multiword expressions multiword expressions (MWEs) in UD (the other two being [fixed]() and [compound]()). It is used for exocentric (headless) semi-fixed MWEs like names (Hillary Rodham Clinton) and dates (24 December). It contrasts with [fixed](), which applies to completely fixed grammaticized (function word-like) MWEs (like in spite of), and with [compound](), which applies to endocentric (headed) MWEs (like apple pie).

Flat MWEs are annotated with a flat structure, where all subsequent words in the expression are attached to the first one using the [flat]() label. The assumption is that these expressions do not have any internal syntactic structure and that the structural annotation is in principle arbitrary. In practice, however, it is highly desirable to use a consistent annotation of all flat MWEs in all languages.

In Bulgarian the names are annotated with this relation for the sake of comparability. Otherwise, Bulgarian proper names have a clear internal syntactic structure.
For dates and complex numerals the following relations are used: [nummod]() and [amod]().


~~~ sdparse
Проблемът за Теодосий Симеонов вече не е при нас .
flat(Теодосий-3, Симеонов-4)
~~~

~~~ sdparse
Problem_the about Teodosiy Simeonov already not is at us .
flat(Teodosiy-3, Simeonov-4)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:26 CET 2020 -->
