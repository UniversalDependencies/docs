---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A `conj` (conjunct) is the relation between two elements connected by a coordinating conjunction, such as *და* 'and', *თუ* 'or', etc. The head of the relation is the first conjunct and all the other conjuncts depend on it via the <code>conj</code> relation. E.g.

* coordination with conjunctions

~~~ sdparse
ნათესავი უკეთური და მომრუშე სასწაულსა ეძიებს, და სასწაული არა ეცეს მას. მ. 12, 39 C /n 'A wicked and adulterous relative seeks a sign, and a sign shall not be given to him.'
cc(მომრუშე, და)
conj(უკეთური, მომრუშე)
~~~

~~~ sdparse
რომელი ინაჴით ზის, ანუ რომელი ჰმსახურებს. ლ. 22,27
'Who is the one reclining, or who is the one serving?'
cc(ჰმსახურებს, ანუ)
conj(ზის, ჰმსახურებს)
~~~

* Asyndetic coordination with omitted conjunction. Commas or other punctuation symbols delimit the conjuncts. 

~~~ sdparse
მიგიზიდეს შენ, შემდგომად შენსა სულნელად ნელსაცხებელისა შენისა ვრბიოდეთ. ქებ. ქებ. 1,4
'They have drawn you, after you, in the fragrance of your perfume, let us run.'
conj(მიგიზიდეს, ვრბიოდეთ)
punct(მიგიზიდეს, ,-7)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:16 CEST -->
