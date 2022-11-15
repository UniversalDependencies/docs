---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
udver: '2'
---


## PROPN: proper noun 

#### Definition

A proper noun [PROPN]() is a noun (or nominal content word) that is the name (or part of the name) of a specific individual, place, or object.


When a PROPN is formed by an <code>ADJ</code> and a noun, such as *Μεγάλη Βδομάδα* / *Meghali Vdhomadha* "Holy Week", *Λιμενικό Σώμα* / *Limeniko Soma* "Coast Guard", *Άρειος Πάγος*/ *Arios Pagos* "The Supreme Court"  the adjective is tagged ADJ and the noun PROPN; the adjective modifies the noun via the syntactic dependency <code>amod</code>.


When other phrases or sentences are used as names, the component words retain their original tags. For example, in *Δίωξη ναρκωτικών* / *Dioxi narkotikon* "Drug Enforcement  Agency", both *Δίωξη* and  *ναρκωτικών* are assigned the tag NOUN.

The word *κύριος* / *kirios* 'mister' is assigned the tag <code>ADJ</code>; however, when it is used with the meaning "the Lord" (see examples), it is assigned the tag <code>PROPN</code>, e.g.,  *ο*.DET *κύριος*.ADJ *Χαρδάκος*.PROPN, *ένας*.DET *κύριος*.ADJ


Acronyms of proper nouns, such as *OHE* / *OIE* "UN" and NATO are assigned the tag PROPN. If they contain numbers (as in various product names) but still consist of one token, they are tagged PROPN and not <code>SYM</code>. However, if a token in a multitoken PROPN consists entirely of digits or an independent word (like *7* in *Windows 7*, *Τρείς Γέφυρες* / *Tris Gefires* "Three Bridges"), it is tagged <code>NUM</code>.
Also when acronyms are spelled out, e.g.,  #μου-μου-ε* (spelling out of the acronym MME) *Μπε-εμ-βε* "BMW", they are assigned the tag PROPN. 

### Examples

-	*Κύριε* / *kirie* "Lord.VOC"
-	Place names such as *Ανατολή* / *Anatoli* "East", *Δύση* / *Disi* "West", *Όλυμπος* / *olibos* "Mount Olympus"
-	Day names such as *Τρίτη* / *Triti* "Tuesday", *Σαββατοκύριακο* / *Savatokiriako* "weekend"
-	Countries such as *Eλλάδα* / *Elada* "Greece", *Κύπρος* / *Kipros* "Cyprus"
-	Diminutives productively formed by a proper noun and a suffix such as  *–άκι, –ίτσα, –ούλης,-άκης* / *-aki, -itsa, -oulis, -akis* like *Mαράκι* / *Maraki* "little Maria", *Γιαννάκης* / *Yianakis* "little Joh": they are assigned the lemma of the original noun and the feature <code>el-DegreeMod</code> takes the value <code>Diminutive</code> 
-	Augmentatives (μεγεθυντικά)  productively formed by a proper noun and a suffix such as *-άρας* / *-aras*, like *Στελάρας* / *Stelaras* "large/great Stelios", *Σουλάρα* /  *Soulara* "large/great Soula": they are assigned the lemma of the original noun and the feature <code>el-DegreeMod</code> takes the value <code>Magnifier</code>
-	Names of anniversaries, bank holidays such as *Ανάσταση* / *Anastasi* "Resurrection", *Επιτάφιος* / *Epitafios* "Epitaph", *Μεγάλη Εβδομάδα* / *Meghali Bdhomadha* "Holy Week", *Πάσχα* / *Pascha* "Easter", *Χριστούγεννα* / *Christouyena* "Christmas", *Πρωτοχρονιά* / *Protochronia* "the first day of the year"  
-	Place names: 
    - Street names in the genitive case where the noun *οδός* / *odos* "street" is omitted, such as *(οδός) Ερμού* / *(odos) Ermou* "Ermou (street)". 
    - Avenue/motorway names consting of two place names in the genitive case (starting-ending places), e.g., *Αθηνών-Κορίνθου* "Athens to Corinth Avenue".  These are productive compounds. Each part of the compound is assigned the tag [PROPN]() and the second proper noun depends on the first one with the  relation <code>compound</code>; the first proper noun is considered the head of the compound. 

Surnames in the GENitive case, like *Κανέλλου* / *Kanelou*  (feminine)  and  *Δημητρίου* /  *Dimitriou* (masculine/femnine), do not inflect and are assigned their own form as a lemma, e.g., the lemma is *Κανέλλου*.  
<!-- Interlanguage links updated Po lis 14 15:34:35 CET 2022 -->
