---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
---

### Definition

Proper nouns specifically represent the names of unique entities, such as individuals, organizations, or geographic locations. Proper nouns are denoted by the PROPN tag, distinguishing them from common nouns ([NOUN]()) and pronouns ([PRON]()) .

Similar to common nouns, Spanish proper nouns also have grammatical features such as gender and number. However, their gender and number are often inherent to the named entity and do not always follow the typical masculine and feminine patterns seen in common nouns. Proper nouns do not usually require articles, but when they do, the articles must agree with the proper noun's gender and number. In Spanish, proper nouns are generally capitalized. This includes the first letter of the proper noun, as well as any other words within a multi-word proper noun, such as place or organization names, with some exceptions like prepositions or articles:

### Examples

_Madrid_ "Madrid"
_Antonio_ "Antonio"
_Los Ángeles_ "Los Angeles"
_Río de la Plata_ "River Plate"
_Universidad de Salamanca_ "University of Salamanca"

Note that when proper nouns are used in an adjectival form, they may lose their capitalization and be tagged as ADJ.

_vino francés_ "French wine" (instead of _"vino Francés"_)

### Compound proper nouns

When proper nouns consist of multiple words, they form compound proper nouns. In UD, these expressions are treated as single units using the MWE tag in the MISC column. While the primary words within the compound proper noun receive the PROPN tag, other words such as determiners or prepositions retain their original POS tags. The head of the MWE is determined based on its syntactic structure. When annotating, it is essential to maintain consistency in the choice of head for similar constructions.

Examples

~~~conllu
# sent_id = 1
# text = San Francisco
1   San         San         PROPN   _   Gender=Masc|Number=Sing   0   root    _   MWE=San_Francisco|MWEPOS=PROPN
2   Francisco   Francisco   PROPN   _   Gender=Masc|Number=Sing   1   flat    _   _
~~~

~~~conllu
# sent_id = 2
# text = Río de la Plata
1   Río         Río         NOUN  _   Gender=Masc|Number=Sing   0   root    _   MWE=Río_de_la_Plata|MWEPOS=PROPN
2   de          de          ADP     _   _                         4   case    _   _
3   la          la          DET     _   Gender=Fem|Number=Sing    4   det     _	 _
4   Plata       Plata       NOUN   _   Gender=Masc|Number=Sing   1   nmod    _
~~~
