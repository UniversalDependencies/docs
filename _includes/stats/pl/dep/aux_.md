

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

944 nodes (1%) are attached to their parents as `aux`.

693 instances of `aux` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20233050847458.

The following 7 pairs of parts of speech are connected with `aux`: [pl-pos/VERB]()-[pl-pos/AUX]() (865; 92% instances), [pl-pos/ADJ]()-[pl-pos/AUX]() (40; 4% instances), [pl-pos/NOUN]()-[pl-pos/AUX]() (18; 2% instances), [pl-pos/VERB]()-[pl-pos/PART]() (16; 2% instances), [pl-pos/PRON]()-[pl-pos/AUX]() (3; 0% instances), [pl-pos/ADV]()-[pl-pos/AUX]() (1; 0% instances), [pl-pos/AUX]()-[pl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Siedziała	siedzieć	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Short|VerbForm=Fin	1	aux	_	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	4	case	_	_
4	milczeniu	milczenie	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	1	obl	_	SpaceAfter=No
5	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
2	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Short|VerbForm=Fin	3	aux	_	_
3	zgubiona	zgubiony	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	To	to	AUX	pred	_	4	cop	_	_
2	był	być	AUX	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	aux	_	_
3	ten	ten	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	kopiec	kopiec	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	interp	_	4	punct	_	_

~~~


