---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

An (`xcomp`) label is used in cases of *obligatory coreference* between 
the subject of a *finite* να-clause, which is not present as a separate 
word, and an argument (subject or object) of the higher clause. 

~~~ sdparse
Ο γιατρός δεν ήξερε να του πει την αλήθεια. 
xcomp(ήξερε, πει)
~~~

~~~ sdparse
Οι μεταφορείς αναγκάζουν τους οδηγούς να οδηγούν ασταμάτητα 
iobj(αναγκάζουν, οδηγούς)
xcomp(αναγκάζουν, οδηγούν)
~~~

There are some cases where the implied subject of both clauses is present in the complement clause. In these cases, we attach the subject to the verb of the complement clause.

~~~ sdparse
Άρχισαν να λένε οι πολιτικοί την αλήθεια στον κόσμο ; 
xcomp(Άρχισαν, λένε)
nsubj(λένε, πολιτικοί)
~~~

The `xcomp` relation is also used for labelling *obligatory* predicatives in clauses where the verb heading the construction is not the copula *είμαι*

~~~ sdparse
Ο Γιάννης υπήρξε πρότυπο ανθρώπου 
xcomp(υπήρξε, πρότυπο)
~~~

~~~ sdparse
Αυτή η συμπεριφορά μοιάζει παρορμητική .
xcomp(μοιάζει, παρορμητική)
~~~

~~~ sdparse
Η σημερινή ημέρα αποτελεί αφετηρία εξελίξεων 
xcomp(αποτελεί, αφετηρία)
~~~

~~~ sdparse
Τον εξέλεξαν βουλευτή 
xcomp(εξέλεξαν, βουλευτή)
~~~

~~~ sdparse
διορίστηκε επιστημονικός συνεργάτης 
xcomp(διορίστηκε, συνεργάτης)
~~~

~~~ sdparse
διορίστηκε ως επιστημονικός συνεργάτης 
xcomp(διορίστηκε, συνεργάτης)
case(συνεργάτης, ως)
~~~

~~~ sdparse
περνιέται για ωραίος
xcomp(περνιέται, ωραίος)
case(ωραίος, για)
~~~

This relation is also used for the small list of resultatives like 

~~~ sdparse
έβαψε το σπίτι μπλε
dobj(έβαψε, σπίτι)
xcomp(έβαψε, μπλε)
~~~

~~~ sdparse
έκοψε τα μαλιά της κοντά
dobj(έκοψε, μαλιά)
xcomp(έκοψε, κοντά)
~~~

~~~ sdparse
έκανε το άρθρο αγνώριστο
dobj(έκανε, άρθρο)
xcomp(έκανε, αγνώριστο)
~~~

For other optional secondary predicates of an adverbial nature, see [advcl](el-dep/advcl).
