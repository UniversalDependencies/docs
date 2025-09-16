---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---
 
 

### Definition

A verb typically denotes events and actions, can constitute a minimal predicate in a clause, and governs the number and types of other constituents which may occur in the clause. Verbs are often associated with grammatical categories like tense, mood, aspect and voice, which can either be expressed inflectionally or using auxilliary verbs or particles.

Τhe uninflected form that is used with the auxiliary *έχω* to form periphrastic tenses (e.g. *έχω γράψει* "I have written", *είχα γράψει* "I had written", *θα έχω γράψει* "I will have written") is assigned the VerbForm=Inf feature-value pair. Mood=... and VerbForm=Inf are mutually exclusive feature-value pairs. *έχω* is also used as a main verb, e.g., in possession denoting structures: *έχω ένα αυτοκίνητο* `I have a car.'


In UD.v2, the form of the verb that traditional grammars categorise as “participle” may be assigned one of the following two parts of speech (POS: [VERB]() or [ADJ](). In GUD and the Greek dialect treebanks, unless otherwise specified, for the participle to be assigned the POS [VERB](), two conditions must be met: 
1) a verb with the same meaning as the participle is in use synchronically
2) the participle inherits the verb’s argument structure 

Consider the form *αποφασισμένος* that is the passive participle of the (active) verb *αποφασίζω* “to decide”. 

e.g.*...καθορίστηκε και ένα συντονιστικό, αποφασισμένο από όλα τα σχήματα* 
"...a coordinating body was specified that was decided by all the parties"

*Ο Γιάννης είναι αποφασισμένος*
“John is determined”

Example A illustrates a participle that preserves the meaning of the morphologically related verb that is in use synchronically. This participle is assigned the POS [VERB]().

Example B illustrates a participle that has a meaning different from the meaning of the synchronically used verb that is morphologically related to it. This participle is assigned the POS [ADJ]().


e.g. *κερδισμένος* comes from the passive voice of the verb *κερδίζω* “to win”. 
a.*Κερδισμένος ο πόντος από τον Γιάννη* “the point won.participle by John”
b.*Κερδισμένος ο Γιάννης από τη διαμάχη* “John won.participle the argument”

In the first sentence, we have the transfer of the verb's argument structure to the participle, whereas in the second sentence, we do not. Additionally, there is a different meaning in the two usage cases. In the first sentence, the meaning of the verb is preserved, while in the second, it is not. Therefore, in the first case we tag the participle as VERB and in the second as ADJ.


<!-- *είμαι* "to be" is assigned the tag [AUX]() when it supports a participle or an adjective and otherwise the tag [VERB](). -->

Most verb forms inflect for <code>Number</code>, <code>Person</code> and are also tagged for <code>Aspect</code>, <code>Mood</code>, <code>Tense</code> and <code>Voice</code>. 


Non-inflecting verb forms ending in *-όντας, -ώντας* (adverbial participles) share properties and usage of adverbs and verbs. They are assigned the tag VERB, the lemma in *-όντας, -ώντας*, the specification <code>VerbForm=Conv</code> and are tagged for <code>Aspect</code> and <code>Voice</code>.  



### Examples
-	*τρέχω, τρώει* / *trecho, troi* "I run/am running, he/she/it eats, is eating"
-	*τρέχοντας, τρώγοντας* / *trechodas, trogodas* "running, eating"

Occassionally, only a few or unique members of the inflectional paradigm of a verb are used, e.g.
- *άει* in many fixed and productive expressions, e.g., *άει πάγαινε*, *άει στο καλό*, *άει στο διάολο*, etc. It is assigned the lemma "άει".
----------
**Cretan**

Occassionally, only a few or unique members of the inflectional paradigm of a verb are used, e.g.
- *γιάε* is an emphatic form of imperative “Look”, e.g. *γιάε μούτρα το μπεγιράκι* “Look at the face of the little horse”. It is assigned the lemma "γιάε" and the features [Mood=Imp](), [Person=2](), [Voice=Act]()

---------------
### References
 
Τζάρτζανος, Αχιλλέας, 2002. *Νεοελληνική Σύνταξις της Κοινής Δημοτικής*. Αθήνα: Εκδόσεις Κυριακίδη. σελ. 225.
https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/

<!-- Interlanguage links updated So 10. května 2025, 18:13:51 CEST -->
