---
layout: relation
title: 'mark'
shortdef: 'marker'
---

A marker is the word introducing a finite clause subordinate to
another clause. For a [complement clause](ccomp), these typically include *ότι*, *πως*, *μήπως*, *αν* etc.
Notice that we annotate *να*, *θα* and *ας* particles as instances of [aux](aux).

~~~ sdparse
Διαβεβαίωσε ότι οι εθελοντές θα συνεχίσουν το έργο τους 
ccomp(Διαβεβαίωσε, συνεχίσουν)
mark(συνεχίσουν, ότι)
~~~

~~~ sdparse
είπε πως άρχισαν να γράφουν
mark(άρχισαν, πως)
aux(γράφουν, να)
~~~

For an [adverbial clause](advcl), the marker is typically a
subordinating conjunction like *αφού* or *επειδή*. The marker is a dependent of the
subordinate clause head. 

~~~ sdparse
Αφού με περιμένουν δεν έχω άλλη επιλογή 
advcl(έχω, περιμένουν)
mark(περιμένουν, Αφού)
~~~

~~~ sdparse
Τη συνέλαβαν επειδή βιντεοσκοπούσε το περιστατικό 
advcl(συνέλαβαν, βιντεοσκοπούσε)
mark(βιντεοσκοπούσε, επειδή)
~~~

When prepositions are used as subordinate conjunctions to introduce clauses, they are also labelled with the `mark` relation. 

~~~ sdparse
Δεν συμμετείχα πριν τη συναντήσω .
advcl(συμμετείχα, συναντήσω)
mark(συναντήσω, πριν)
~~~

~~~ sdparse
Δεν συμμετείχα πριν να τη συναντήσω .
advcl(συμμετείχα, συναντήσω)
mark(συναντήσω, πριν)
mwe(συναντήσω, να)
~~~

~~~ sdparse
Ψάχνουν τρόπους για να το σταματήσουν 
advcl(Ψάχνουν, σταματήσουν)
mark(σταματήσουν, για)
aux(σταματήσουν, να)
~~~

~~~ sdparse
θα καταλάβουμε το βουνό προτού να ξημερώσει
advcl(καταλάβουμε, ξημερώσει)
mark(ξημερώσει, προτού)
aux(ξημερώσει, να)
~~~

~~~ sdparse
Ο χρόνος επαρκεί προκειμένου να μάθει ο προπονητής το υλικό και να το δουλέψει 
advcl(επαρκεί, μάθει)
mark(δουλέψει, προκειμένου)
aux(μάθει, να)
cc(μάθει, και)
conj(μάθει, δουλέψει)
aux(δουλέψει, να)
~~~

For certain multiword subordinate conjunctions, we use combinations of the `mark` and the [mwe](mwe) relations. 

~~~ sdparse
Αν και βρίσκεται στο σωστό δρόμο χρειάζεται περισσότερο χρόνο
advcl(χρειάζεται, βρίσκεται)
mark(βρίσκεται, Αν)
mwe(Αν, και)
~~~


