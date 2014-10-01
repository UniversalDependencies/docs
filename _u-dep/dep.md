---
layout: base
title: 'dep'
shortdef: 'unspecified dependency'
---

## `{{ page.title }}`: {{ page.shortdef }}

A dependency is labeled as `dep` when the system is unable to
determine a more precise dependency relation between two words.  This
may be because of a weird grammatical construction, a limitation in
software (e.g. the Stanford Dependency conversion), a parser error, or
because of an unresolved long distance dependency.

~~~ sdparse
Then , as if to show that he could , ...
dep(show, if)
~~~
