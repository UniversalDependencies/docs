---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
---

A relative clause modifier of an noun is a finite clause that modifies the noun and is introduced by *που* or a (structure including) an *οποίος*-relative pronoun. The relation points from the noun that is modified to the head of the relative clause. *οποίος*-relative pronoun are assigned typical nominal relations like  [dobj](dobj), [nsubj](nsubj) and [nmod](nmod). A [det](det) relation is also possible.

~~~ sdparse
το Όσκαρ με το οποίο τιμήθηκε
acl:relcl(Όσκαρ, τιμήθηκε)
nmod(τιμήθηκε, οποίο)
~~~

~~~ sdparse
το έκθεμα , για τη μόνιμη θέση του οποίου διαφωνούν 
acl:relcl(έκθεμα, διαφωνούν)
nmod(διαφωνούν, θέση)
nmod(θέση, οποίου)
~~~

~~~ sdparse
δάνειζαν ποσά σε ιδιώτες, τα οποία ποσά εκείνοι χρησιμοποιούσαν ...
acl:relcl(ποσά, χρησιμοποιούσαν)
dobj(χρησιμοποιούσαν, ποσά)
det(ποσά, οποία)
~~~

In the current version of the UD guidelines for Greek, we use the [mark](mark) relation for the Greek relativizer *που*.

~~~ sdparse
το βιβλίο που σου έδωσα
acl:relcl(βιβλίο, έδωσα)
mark(έδωσα, που)
~~~

~~~ sdparse
μια έκθεση που να μην περιέχει λάθη
acl:relcl(έκθεση, περιέχει)
mark(περιέχει, που)
aux(περιέχει, να)
neg(περιέχει, μην)
~~~

<!---
TODO: Revisit arguments for pou being a marker or a relative pronoun
-->
