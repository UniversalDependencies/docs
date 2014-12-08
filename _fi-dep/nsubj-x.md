---
layout: entry
title:  'nsubj:x'
shortdef : 'external subject'
---

(Note: this type is *not* part of the basic UD Finnish dependency 
representation and is only used in the second layer of annotation.)

Open clausal complements share their subject with another verb
(see also the documentation for [xcomp]()). The fact that the
subject of the main verb is also the subject of the complement cannot
be annotated using basic dependencies in UD Finnish, as this would
violate the treeness restriction.  Therefore, these subjects are
marked on the second layer of annotation (`DEPS` field) using the
dependency types `nsubj:x` and [`xsubj-cop`](). Note also that an open
clausal complement may not always have a subject, in for instance
passive constructions.

<!-- fname:xsubj.pdf -->
~~~ sdparse
Matti ryhtyi lukemaan . \n Matti started_to read .
nsubj(ryhtyi-2, Matti-1)
xcomp(ryhtyi-2, lukemaan-3)
punct(ryhtyi-2, .-4)
nsubj:x(lukemaan-3, Matti-1)
~~~
