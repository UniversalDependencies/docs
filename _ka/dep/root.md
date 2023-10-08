---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The root grammatical relation points to the root of the sentence, so there's only one root for each sentence. In Georgian the root is usually a verbal predicate. 

~~~ sdparse
ჩემი კვალი ნახონ მათ, ვინცა ჩემს უკან ვლიან... \n 'Let those who follow me see my path.'
root(ROOT, ნახონ)
~~~
~~~ sdparse
ფიქრი ირევა ჩემს თავში. \n 'A thought swirls in my head.'
root(ROOT, ირევა)
cop(apparenza, è)
~~~
~~~ sdparse
შორეულ მთათა შემოეხვევა ნისლი გრძნეული. \n 'The distant mountains are surrounded by mist.'
root(ROOT, შემოეხვევა)
~~~

If the main predicate is not present due to ellipsis and there are multiple orphaned dependents, the leftmost dependent should be promoted to the head (<code>root</code>) position and the other orphans should be attached to it.

~~~ sdparse
გაკვეთილის სათაური. \n 'Lesson title.'
root(ROOT, სათაური)
nmod(სათაური, გაკვეთილის)
punct(სათაური, .)
~~~