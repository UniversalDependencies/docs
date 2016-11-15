

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Uyghur)

This relation is a language-specific subtype of [nmod]().
There are also 7 other language-specific subtypes of `nmod`: [nmod:abl](), [nmod:cau](), [nmod:clas](), [nmod:cmp](), [nmod:part](), [nmod:ref](), [nmod:tmod]().

252 nodes (4%) are attached to their parents as `nmod:poss`.

252 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32539682539683.

The following 12 pairs of parts of speech are connected with `nmod:poss`: [ug-pos/NOUN]()-[ug-pos/NOUN]() (176; 70% instances), [ug-pos/NOUN]()-[ug-pos/PRON]() (44; 17% instances), [ug-pos/VERB]()-[ug-pos/NOUN]() (10; 4% instances), [ug-pos/NOUN]()-[ug-pos/VERB]() (5; 2% instances), [ug-pos/NOUN]()-[ug-pos/ADJ]() (4; 2% instances), [ug-pos/NUM]()-[ug-pos/NOUN]() (3; 1% instances), [ug-pos/VERB]()-[ug-pos/PRON]() (3; 1% instances), [ug-pos/ADJ]()-[ug-pos/NOUN]() (2; 1% instances), [ug-pos/ADV]()-[ug-pos/NOUN]() (2; 1% instances), [ug-pos/NOUN]()-[ug-pos/NUM]() (1; 0% instances), [ug-pos/NUM]()-[ug-pos/VERB]() (1; 0% instances), [ug-pos/VERB]()-[ug-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	كەنتىمىزنىڭ	_	NOUN	N	_	3	nmod:poss	_	Translit=kentimizning
2	ئالدى	_	NOUN	N	_	3	compound	_	Translit=aldi
3	تەرىپىدە	_	NOUN	N	_	7	nmod	_	Translit=teripide
4	بىر	_	NUM	M	_	6	det	_	Translit=bir
5	كىچىك	_	ADJ	A	_	6	amod	_	Translit=kichik
6	تاغ	_	NOUN	N	_	7	nsubj	_	Translit=tagh
7	بار	_	ADJ	A	_	0	root	_	Translit=bar
8	،	_	PUNCT	Y	_	7	punct	_	Translit=,

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	مانا	_	PRON	P	_	4	discourse	_	Translit=mana
2	بۇ	_	PRON	P	_	4	nsubj	_	Translit=bu
3	بىزنىڭ	_	PRON	P	_	4	nmod:poss	_	Translit=bizning
4	مارجانبۇلىقىمىز	_	NOUN	N	_	0	root	_	Translit=marjanbuliqimiz
5	،	_	PUNCT	Y	_	4	punct	_	Translit=,

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod:poss	color:blue
1	مانا	_	PART	T	_	5	discourse	_	Translit=mana
2	بۇ	_	PRON	P	_	5	nsubj	_	Translit=bu
3	كەنتىمىزنىڭ	_	NOUN	N	_	5	nmod:poss	_	Translit=kentimizning
4	چىرايلىق	_	ADJ	A	_	5	amod	_	Translit=chirayliq
5	مارجانبۇلىقى	_	VERB	V	_	0	root	_	Translit=marjanbuliqi
6	.	_	PUNCT	Y	_	5	punct	_	Translit=.

~~~


