---
layout: postag
title: 'PART'
shortdef: 'particle'
udver: '2'
---

## PART: particle

## Definition

Particles are function words that must be associated with another word or phrase to impart meaning and that do not satisfy definitions of other universal parts of speech (e.g. adpositions <code>ADP</code>, coordinating conjunctions, subordinating conjunctions or auxiliary verbs). Particles may encode grammatical categories such as negation, mood, tense etc. Particles are normally not inflected, although exceptions may occur.

Hint: *όχι" / *ohi* "no/not" should be tagged as [PART]() and [Polarity=Neg]() if it is used like the English particle *not*, e.g., *φέρε τον αναπτήρα, όχι τα σπίρτα* / *fere ton anaptira, ochi ta spirta* "fetch the lighter, not the matches". *Όχι* / *ochi* "no/not" is typically used as an interjection [INTJ]() with [Polarity=Neg]().

### Examples
-	*δεν* 
-	*καν*
-	*μπας (και)*
-	*μην* 
-	*να*
-	*όχι*
-	*πάρα*
-	*μακάρι*

- να* is tagged [PART]():
  	-	elsewhere, e.g.,  *Λόλα*, <b>να</b> *ένα μήλο* "Lola, here is an apple.",

	-	when it is used in an elliptical structure of “είναι” (to be), serving to point out or draw attention to something. This structure allows for two possibilities: expression with either the nominative or the accusative case. In both cases, the particle “να” is morphologically classified as [PART]() and syntactically as discourse, e.g., Να τον φίλο στο παλάτι “There’s the friend in the palace.”

~~~ sdparse ~~~
Να τον φίλο στο παλάτι
root(ROOT, παλάτι)
discourse(παλάτι, να)
nsubj(παλάτι, φίλο)
~~~

### References

Τριανταφυλλίδης, Μανόλης. 1941, Reprinted 2000. *Νεοελληνική Γραμματική. Αθήνα: Οργανισμός Εκδόσεως Διδακτικών Βιβλίων*: 203-205.
         
https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/
<!-- Interlanguage links updated So 10. května 2025, 18:13:46 CEST -->
