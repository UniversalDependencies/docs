---
layout: postag
title: 'X'
shortdef: 'other'
---


### Definition
The tag X is used for words that for some reason cannot be assigned a real part-of-speech category. It should be used very restrictively.
A special usage of X is for cases of code-switching where it is not possible (or meaningful) to analyze the intervening language grammatically (and where the dependency relation flat:foreign is typically used in the syntactic analysis). This usage does not extend to ordinary loan words which should be assigned a normal part-of-speech. For example, in φόρεσε το κραγιόν της, κραγιόν is an ordinary NOUN.

Αbbreviations should be categorized by their common use and not as an X, e.g. 
*Κ.Ε.Α.Ν: ΚΟΜΜΑ ΕΘΝΙΚΗΣ ΑΝΤΙΣΤΑΣΗΣ* "Party of National Resistance"
should be assigned the PoS tag <code>NOUN</code> and the feature <code>Abbr=Yes</code>. 

(Only the morphological aspects are discussed here; tokens morphologically tagged with “X” have a syntactic function that will be assigned to them at syntactic annotation time).

### Examples

-	*H αναπαραγωγή δεν θα είναι εντελώς <b>Lossless</b>*. "Reproduction won't be fully <b>Lossless</b>."
-	*Τα κορναρίσματα είναι σαν το <b>γιούνισεξ</b>.* "Honks are like <b>unisex</b>."


