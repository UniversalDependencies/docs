---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
---


## PROPN: proper noun 

#### Definition

A proper noun [PROPN]() is a noun (or nominal content word) that is the name (or part of the name) of a specific individual, place, or object.

When a PROPN is formed by an [ADJ]() and a [Noun](), such as *Μεγάλη Βδομάδα* / *Meghali Vdhomadha* "Holy Week", *Λιμενικό Σώμα* / *Limeniko Soma* "Coast Guard", *Άρειος Πάγος*/ *Arios Pagos* "The Supreme Court"  the adjective is tagged ADJ and the noun PROPN; the adjective modifies the noun via the syntactic dependency [amod]().

When other phrases or sentences are used as names, the component words retain their original tags. For example, in *Δίωξη ναρκωτικών* / *Dioxi narkotikon* "Drug Enforcement  Agency", both *Δίωξη* and  *ναρκωτικών* are assigned the tag NOUN.

Acronyms of proper nouns, such as *OHE* / *OIE* "UN" and NATO are tagged PROPN. If they contain numbers (as in various product names) but still consist of one token, they are tagged PROPN and not [SYM](). However, if a token in a multitoken PROPN consists entirely of digits (like *7* in *Windows 7*), it is tagged [NUM]().

### Examples

-	*Κύριε* / *kirie* "Lord. Vocative"
-	Place names such as *Ανατολή* / *Anatoli* "East", *Δύση* / *Disi* "West", *Όλυμπος* / *olibos* "Mount Olympus"
-	Day names such as *Τρίτη* / *Triti* "Tuesday", *Σαββατοκύριακο* / *Savatokiriako* "weekend"
-	Countries such as *Eλλάδα* / *Eladha* "Greece", *Κύπρος* / *Kipros* "Cyprus"
-	Diminutives productively formed by a proper noun and a suffix such as  *–άκι, –ίτσα, –ούλης,-άκης* / *-aki, -itsa, -oulis, -akis* like *Mαράκι* / *Maraki* "little Maria", *Γιαννάκης* / *Yianakis* "little Joh": they are assigned the lemma of the original noun and the feature [el-DegreeMod]() takes the value [Diminutive]() 
-	Magnifiers (μεγεθυντικά)  productively formed by a proper noun and a suffix such as *-άρας* / *-aras*, like *Στελάρας* / *Stelaras* "large/great Stelios", *Σουλάρα* /  *Soulara* "large/great Soula": they are assigned the lemma of the original noun and the feature [el-DegreeMod]() takes the value [Magnifier]()
-	Names of anniversaries, bank holidays such as *Ανάσταση* / *Anastasi* "Resurrection", *Επιτάφιος* / *Epitafios* "Epitaph", *Μεγάλη Εβδομάδα* / *Meghali Bdhomadha* "Holy Week", *Πάσχα* / *Pascha* "Easter", *Χριστούγεννα* / *Christouyena* "Christmas" 
-	Place names: street names in the genitive case resulting from the drop of the noun *οδός* / *odhos* "street", such as *(οδός) Ερμού* / *(odhos) Ermou* "Ermou (street)"

Surnames in the genitive case like *Κανέλλου* / *Kanelou*  (feminine)  and  *Δημητρίου* /  *Dimitriou* (masculine/femnine) do not inflect and are assigned their own form as a lemma, e.g., the lemma is *Κανέλλου*.  
