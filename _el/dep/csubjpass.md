---
layout: relation
title: 'csubjpass'
shortdef: 'clausal passive subject'
---

A clausal passive subject is a clausal syntactic subject of a passive
clause (or more generally, any voice where the proto-agent argument does not become the subject 
of the clause). In the example below, *that she lied* is the subject.

~~~ sdparse
Ακούγεται ότι θα μεταφερθεί
csubjpass(Ακούγεται, μεταφερθεί)
~~~

~~~ sdparse
Αποφασίστηκε να συνεχιστούν οι συνομιλίες
csubjpass(Αποφασίστηκε, συνεχιστούν)
nsubj(συνεχιστούν, συνομιλίες)
~~~

