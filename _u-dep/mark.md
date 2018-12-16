---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the word marking a clause as subordinate to
another clause. For a [complement clause](ccomp), this is words like [en] _that_
or _whether._ For an [adverbial clause](advcl), the marker is typically a
[subordinating conjunction](../pos/SCONJ) like [en] _while_ or _although._ The marker is a dependent of the
subordinate clause head. In a [relative clause](../overview/complex-syntax.html), it is a normally uninflected word, which simply introduces a relative clause, such as [he] _še_. (In this last use, one needs to distinguish between relative clause markers, which are `mark`, from relative pronouns such as [en] _who_ or _that_, which fill a regular verbal argument or modifier grammatical relation.) 

~~~ sdparse
Forces engaged in fighting after insurgents attacked
mark(attacked, after)
~~~

~~~ sdparse
He says that you like to swim
mark(like, that)
~~~

Infinitive markers (e.g. English _to,_ German _zu_) in infinitival clauses are also attached as `mark`:

~~~ sdparse
Er kam wieder , um das Werk zu Ende zu bringen \n He came again , so-that the work to end to bring
mark(bringen, um)
mark(bringen, zu-10)
mark(bring, so-that)
mark(bring, to-22)
~~~
