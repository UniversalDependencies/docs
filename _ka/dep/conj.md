---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A `conj` (conjunct) is the relation between two elements connected by a coordinating conjunction, such as *და* 'and', *თუ* 'or', etc. The head of the relation is the first conjunct and all the other conjuncts depend on it via the <code>conj</code> relation. E.g.

* coordination with conjunctions

~~~ sdparse
რატომღაც არა მჯერა იმათი, ვინც დაიბადა და შემდეგ იძახის – მე ხომ არ მითხოვია დაბადებაო.
'For some reason, I don't believe in those who were born and then say, 'I didn't ask to be born.'
cc(იძახის, და)
conj(დაიბადა, იძახის)
~~~
~~~ sdparse
რევოლუციური მთავრობების სარისკო მახასიათებელი იყო და არის არაფორმალური გუნდურობა, დემოკრატიული ჩართულობის, ანგარიშგების თუ შეკავება-გაწონასწორების პრინციპების შესუსტება.
'A risky feature of revolutionary governments has been and continues to be informal collaboration, which weakens the principles of democratic engagement, accountability, and checks and balances.'
cc(შეკავება-გაწონასწორების, თუ)
conj(ანგარიშგების, შეკავება-გაწონასწორების)
~~~

* Asyndetic coordination with omitted conjunction. Commas or other punctuation symbols delimit the conjuncts. 

~~~ sdparse
ხშირად მოკლე სიტყვა, ერთი ჟესტიც კმაროდა, რომ კიდევ ერთხელ დამტკიცებულიყო ჩვენი ნება-სურვილის და ბრძოლის ერთობლიობა.
'Often, a short word or a single gesture was enough to once again prove the unity of our will and struggle.'
conj(სიტყვა, ჟესტიც)
punct(სიტყვა, ,-3)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:40 CET -->
