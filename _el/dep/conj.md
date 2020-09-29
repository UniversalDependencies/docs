---
layout: relation
title: 'conj'
shortdef: 'conjunct'
---

A conjunct is the relation between two elements connected by a
coordinating conjunction, such as _και_, _αλλά_, etc.  We treat
conjunctions asymmetrically: The head of the relation is the first
conjunct and all the other conjuncts depend on it via the `conj` relation.

~~~ sdparse
Ακούστηκαν προτάσεις για παραγωγική ανασυγκρότηση και βιώσιμη ανάπτυξη 
conj(ανασυγκρότηση, ανάπτυξη)
~~~

<div id="punct1" class="sd-parse">
των σχέσεων μεταξύ οικονομίας , πολιτικού παιγνίου , κομματικής ισορροπίας και διεθνούς παράγοντα . 
conj(οικονομίας, ισορροπίας)
conj(οικονομίας, παιγνίου)
conj(οικονομίας, παράγοντα)
cc(οικονομίας, και)
punct(οικονομίας, ,-5)
punct(οικονομίας, ,-8)
</div>

~~~ sdparse
Μια μικρή αλλά ανθηρή επιχείρηση . 
amod(επιχείρηση, μικρή)
cc(μικρή, αλλά)
conj(μικρή, ανθηρή)
~~~

Coordinate clauses are treated the same way as coordination of other constituent types:

~~~ sdparse
Ο οδηγός ενοχλήθηκε και άρχισε να κορνάρει . 
cc(ενοχλήθηκε, και)
conj(ενοχλήθηκε, άρχισε)
~~~

Coordination may be _asyndetic,_ which means that the coordinating conjunction is omitted.
Commas or other punctuation symbols will delimit the conjuncts in the typical case.

~~~ sdparse
Θα προωθήσουν ένα ασφαλέστερο , πιο ανθεκτικό παγκόσμιο χρηματοπιστωτικό σύστημα . 
conj(ασφαλέστερο, ανθεκτικό)
punct(ασφαλέστερο, ,-5)
~~~

Coordination can apply to most word categories.

~~~ sdparse
Άνοιξαν και έκλεισαν την πόρτα . 
conj(Άνοιξαν, έκλεισαν)
cc(Άνοιξαν, και)
dobj(Άνοιξαν, πόρτα)
~~~

~~~ sdparse
από και προς το αεροδρόμιο 
case(αεροδρόμιο, από)
cc(από, και)
conj(από, προς)
~~~

~~~ sdparse
εάν και εφόσον δεήσουν 
mark(δεήσουν, εάν)
cc(εάν, και)
conj(εάν, εφόσον)
~~~



### TODO
Shared dependents. 
Nested coordination.
<!-- Interlanguage links updated Út zář 29 20:31:47 CEST 2020 -->
