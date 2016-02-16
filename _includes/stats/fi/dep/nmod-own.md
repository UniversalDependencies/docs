

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:gsubj](), [nmod:poss]().

284 nodes (0%) are attached to their parents as `nmod:own`.

268 instances of `nmod:own` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45070422535211.

The following 5 pairs of parts of speech are connected with `nmod:own`: [fi-pos/VERB]()-[fi-pos/PRON]() (186; 65% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (69; 24% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (22; 8% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (5; 2% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:own	color:blue
1	Lapsina	lapsi	NOUN	N	Case=Ess|Number=Plur	3	nmod	_	_
2	meillä	minä	PRON	Pron	Case=Ade|Number=Plur|Person=1|PronType=Prs	3	nmod:own	_	_
3	oli	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	maalla	maa	NOUN	N	Case=Ade|Number=Sing	3	nmod	_	_
5	satumetsä	satu#metsä	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:own	color:blue
1	Kielenopiskelijoilla	kieli#opiskelija	NOUN	N	Case=Ade|Number=Plur	3	nmod:own	_	_
2	taas	taas	ADV	Adv	_	3	advmod	_	_
3	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	kaksi	kaksi	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
5	erillistä	erillinen	ADJ	A	Case=Par|Degree=Pos|Number=Sing	6	amod	_	_
6	järjestelmää	järjestelmä	NOUN	N	Case=Par|Number=Sing	3	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:own	color:blue
1	Herra	herra	NOUN	N	Case=Nom|Number=Sing	2	compound:nn	_	_
2	Rübigillä	Rübig	PROPN	N	Case=Ade|Number=Sing	3	nmod:own	_	_
3	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	puheenvuoro	puheen#vuoro	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
5	eiliseen	eilinen	ADJ	A	Case=Ill|Degree=Pos|Number=Sing	6	amod	_	_
6	pöytäkirjaan	pöytä#kirja	NOUN	N	Case=Ill|Number=Sing	7	nmod	_	_
7	liittyen	liittyä	VERB	V	Case=Ins|InfForm=2|Number=Sing|VerbForm=Inf|Voice=Act	4	advcl	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


