---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---
`dep` – unspecified dependency.

The `dep` relation is used in cases where it is impossible to determine a specific
dependency relation between words. This may occur because of an unusual or non-standard
grammatical construction, or limitations arising from automatic conversion or annotation software.
A word annotated with `dep` is attached to the nearest syntactic head in the sentence.

~~~ sdparse
Obligacijų savininkų susirinkimas šaukiamas , kai : \n The-bondholders ’ meeting is-convened when :
dep(šaukiamas, kai)
dep(is-convened, when)
~~~

~~~ sdparse
Buvo įtraukti iš 23 klausimai . \n 23 questions from were included .
dep(įtraukti, iš)
dep(included, from)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:59:39 CEST -->
