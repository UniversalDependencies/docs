---
layout: feature
title: 'Voice'
shortdef: 'voice'
---

Voice is a feature of verbs that helps map the traditional syntactic functions, such as subject and object, to semantic roles, such as agent and pacient.

### `Act`: active voice

The subject of the verb is the doer of the action (agent), the object is affected by the action (pacient).

All finite verb forms and the adverbial participle are tagged `Voice=Act`.

#### Examples

* _Ми <b>читали</b> цю книгу.&nbsp;_ “We <b>read</b> this book`Acc`.” (the active past tense form _читали&nbsp;_ can be also used to form conditional mood; here it is used in its original past meaning.)

### `Pass`: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either unexpressed or it appears as an object of the verb. 

Passive voice is formed periphrastically in Ukrainian. The most typical passive construction consists of the finite verb forms of the auxiliary verbs _бути_&nbsp; “to be” (optional for the present forms) and the present or past passive adjectival participle. The grammatical subject in such constructions, being the semantic object, or patient, is in the nominative case. The semantic subject in such constructions is optional, it is expressed by the instrumental case. Note that the adjectival participles, sharing most morphological features with adjectives (with the exception of aspect and voice which are inherited from verbs), are treated as a special type of adjectives in Ukrainian. An alternative passive construction, also periphrastic, is more specific and both of its parts belong to the verb. The semantic object is expressed by the accusative case, similarly to the prototypical active construction. The semantic subject is also optional and expressed by the instrumental case. It also uses finite verb forms of the auxiliary verbs _бути_&nbsp; “to be” (optional for the present forms). The lexical meaning is presented by the Impersonal verb form, which also receives the tag `Voice=Pass`.

#### Examples

* _Ця книга <b>прочитана</b> нами.&nbsp;_ “This book`Nom` <b>was read</b> by us.” (The adjectival passive participle _прочитана_ conveys the passive meaning.)
* _Цю книгу <b>прочитано</b> нами.&nbsp;_ “This book`Acc` <b>was read</b> by us.” (The impersonal verb form _прочитано_ conveys the passive meaning.)

<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->
