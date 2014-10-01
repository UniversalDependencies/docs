---
layout: base
title: 'mark'
shortdef: 'marker'
---

## {{ page.title }}: {{ page.shortdef }}

A marker is the word introducing a finite clause subordinate to
another clause. For a [complement clause](ccomp), this will typically be _that_
or _whether._ For an [adverbial clause](advcl), the marker is typically a
[subordinating conjunction](../pos/SCONJ) like _while_ or _although._ The mark is a dependent of the
subordinate clause head.

~~~ sdparse
Forces engaged in fighting after insurgents attacked
mark(attacked, after)
~~~

~~~ sdparse
He says that you like to swim
mark(swim, that)
~~~

~~~ sdparse
Er kam wieder , um das Werk zu Ende zu bringen \n He came again , so-that the work to end to bring
mark(bringen, um)
mark(bringen, zu-10)
mark(bring, so-that)
mark(bring, to-22)
~~~
