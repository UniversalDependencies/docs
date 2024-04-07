---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---
 
 

### Definition

A verb typically denotes events and actions, can constitute a minimal predicate in a clause, and governs the number and types of other constituents which may occur in the clause. Verbs are often associated with grammatical categories like tense, mood, aspect and voice, which can either be expressed inflectionally or using auxilliary verbs or particles.

Τhe uninflected form that is used with the auxiliary *έχω* to form periphrastic tenses (e.g. *έχω γράψει* "I have written", *είχα γράψει* "I had written", *θα έχω γράψει* "I will have written") is assigned the VerbForm=Inf feature-value pair. Mood=... and VerbForm=Inf are mutually exclusive feature-value pairs. *έχω* is also used as a main verb, e.g., in possession denoting structures: *έχω ένα αυτοκίνητο* `I have a car.'


Participles in *-μένος* are productive in Modern Greek. These and the participles in *-θείς*  are assigned the tag VERB, the lemma in *-μένος*  and *-θείς*,  and the features Case=...|Gender=...|Number=...VerbForm=Part|Voice=Pass. 
Ηowever, there are formations in *-μένος* not related to a verb in use, e.g., *χιλιοτραγουδισμένος* / *chiliotragoudismenos* “storied”, *ξακουσμένος* / _ksakousmenos_ “famous”, etc; these are assigned the  tag [ADJ]().

*είμαι* "to be" is assigned the tag [AUX]() when it supports a participle or an adjective and otherwise the tag [VERB]().

Most verb forms inflect for <code>Number</code>, <code>Person</code> and are also tagged for <code>Aspect</code>, <code>Mood</code>, <code>Tense</code> and <code>Voice</code>. 


Non-inflecting verb forms ending in *-όντας, -ώντας* (adverbial participles) share properties and usage of adverbs and verbs. They are assigned the tag VERB, the lemma in *-όντας, -ώντας*, the specification <code>VerbForm=Conv</code> and are tagged for <code>Aspect</code> and <code>Voice</code>.  



### Examples
-	*τρέχω, τρώει* / *trecho, troi* "I run/am running, he/she/it eats, is eating"
-	*τρέχοντας, τρώγοντας* / *trechodas, trogodas* "running, eating"

Occassionally, only a few or unique members of the inflectional paradigm of a verb are used, e.g.
- *άει* in many fixed and productive expressions, e.g., *άει πάγαινε*, *άει στο καλό*, *άει στο διάολο*, etc. It is assigned the lemma "άει".
  
### References
 
Τζάρτζανος, Αχιλλέας, 2002. *Νεοελληνική Σύνταξις της Κοινής Δημοτικής*. Αθήνα: Εκδόσεις Κυριακίδη. σελ. 225.
https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:31 CET -->
