---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

#DA FARE

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
  <td><a href="#Ger">Ger</a></td>
  <td><a href="#Gdv">Gdv</a></td>
  <td><a href="#Sup">Sup</a></td>
  <td><a href="#VNoun">VNoun</a></td>
</tr>
</table>

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](cs-pos/VERB), it is not the case.
The `Part` value can be used also with [adjectives](cs-pos/ADJ).
It distinguishes participles from other verb forms,
and participial adjectives from other adjectives.

Usato in tutte le parole di origine verbale come legame morfoetimologico

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite.
In Czech this applies to indicative and imperative forms,
and to the special conditional forms of the [auxiliary verb](cs-pos/AUX) _být_.

#### Examples

- _nesu, neseš, nese, neseme, nesete, nesou_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _nes, nesme, neste_ &nbsp;“carry” (imperative in different persons and numbers)
- _jsem, jsi, je, jsme, jste, jsou_ &nbsp;“I am, you are, he/she/it is, we are, you are, they are”
- _budu, budeš, bude, budeme, budete, budou_ &nbsp;“I will be, you will be, he/she/it will be, we will be, you will be, they will be”
- _bych, bys, by, bychom, byste, by_ &nbsp;“I would, you would, he/she/it would, we would, you would, they would”
- _buď, buďme, buďte_ &nbsp;“be” (imperative in different persons and numbers)

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs.
It is also used with the auxiliary _být&nbsp;_ to form periphrastic future tense,
and it appears as the argument of modal and other verbs.

#### Examples

- _nést_ &nbsp;“to carry”
- _být_ &nbsp;“to be”

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form that shares properties of verbs
and adjectives. Czech has two types of participles:

- The past participle (also called active participle or l-participle)
  is used to form the past tense, and the conditional mood in present or past tense.
- The passive participle
  is used to form the passive voice (in any tense or mood).

Participles inflect for [Gender]() and [Number]() but not for [Person]().

Pippozzo sui "tempi" dei participi: presente e futuro sono solo relativi

#### Examples

- _nesl, nesla, neslo, nesli, nesly_ &nbsp;“carried” (past participle in different genders and numbers)
- _nesen, nesena, neseno, neseni, neseny_ &nbsp;“carried” (passive participle in different genders and numbers)
- _byl, byla, bylo, byli, byly_ &nbsp;“was/been” (past participle in different genders and numbers)

### <a name="Ger">`Ger`</a>: gerund

Nota: obsoleto, da non usare e insensato: coincide col Gdv; la differenza è sintattica (tendenza alla deponenza)

### <a name="Gdv">`Gdv`</a>: gerundive

Nota: participio, e us odel prospettivo

### <a name="Sup">`Sup`</a>: supine

Nota: perchè non VNoun? Il più nome di tutti

### <a name="VNoun">`VNoun`</a>: verbal noun

Porposta per  supin oe inf


##### Note: rationalisation of VerbForm with regard to universality


