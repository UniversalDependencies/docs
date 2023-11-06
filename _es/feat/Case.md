---
layout: feature
title: 'Case'
shortdef: 'case'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Acc">Acc</a></td>
  <td><a href="#Com">Com</a></td>
  <td><a href="#Dat">Dat</a></td>
  <td><a href="#Nom">Nom</a></td>
</tr>
</table>

A case is each of the different forms a nominal word can take to express a syntactic function in a sentence. Cases are characteristic (but not exclusive) of many Indo-European languages.

In Spanish, the closest equivalent that has been preserved is in the pronouns. In UD Spanish morphology, three cases are distinguished: Nominative, Dative and Accusative.


### <a name="Nom">`Nom`</a>: nominative

The Nominative case is used when the pronoun functions as the subject of the sentence, which is the person, place, or
thing doing the action. Examples of this in Spanish are pronouns like "yo" (I), "tú" (you), and "nosotros" (we).

#### Examples:

* _Yo voy a la biblioteca._ "I go to the library."
* _Nosotros comemos siempre._ "We always eat."


### <a name="Acc">`Acc`</a>: accusative

The Accusative case is used for direct objects, which directly receive the action of the verb. In Spanish, the pronouns
used in the accusative case are "me" (me), "te" (you), "lo" (him, it), and "la" (her, it), among others.

#### Examples:

* _Yo lo veo._ "I see it."
* _Mi hermana nos enseña._ "My sister teaches us​."


### <a name="Dat">`Dat`</a>: dative

Dative case is used for indirect objects, which indirectly receive the action of the sentence. The Spanish pronouns for
the dative case are "me" (me), "te" (you), "le" (him, her, it), and "nos" (us), among others.

#### Examples:

* _Yo le doy el regalo._ "I give him the present."
* _Mi hermana me escribe._ "My sister writes me."


### <a name="Com">`Com`</a>: comitative

The comitative case is normally not morphological in Spanish and the corresponding meaning is expressed by the
preposition _con_ "with". However, three pronouns fuse with the preposition and create a form that is different
from other case forms of the pronoun and that can be described as comitative.

#### Examples

* _conmigo_ "with me"
* _contigo_ "with you"
* _consigo_ "with himself/herself"


#### <a name="Acc,Nom">`Acc,Nom`</a>: nominative or accusative

In UD Spanish treebanks, certain pronouns are annotated with the double case value `Acc,Nom`, which signifies that
these pronouns can function in both the Accusative (as direct objects) and Nominative (as subjects).

This group of pronouns includes "nosotros/nosotras" (we), "él/ella/ello" (he/she/it), and "ellos/ellas" (they). These
pronouns can be used as the subject of a sentence, but they can also receive the action of a verb directly, which would
typically be the function of an object. This dual function is why they are annotated with both the `Nom` and `Acc` case
values.

For example, consider the sentence _Nosotros vemos a ellos._ Here, _nosotros_ is the subject of the sentence
(Nominative case), and _ellos_ is the direct object (Accusative case). In this sentence, both "nosotros" and "ellos"
would be tagged with `Case=Acc,Nom`, indicating their potential to function in either case, depending on the sentence
structure.


#### References

* REAL ACADEMIA ESPAÑOLA (2009): Nueva gramática de la lengua española. Madrid: Espasa.
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:36 CET -->
