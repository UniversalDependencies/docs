

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

5855 nodes (4%) are attached to their parents as `obl`.

3893 instances of `obl` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.99880444064902.

The following 26 pairs of parts of speech are connected with `obl`: [bg-pos/VERB]()-[bg-pos/NOUN]() (4127; 70% instances), [bg-pos/ADJ]()-[bg-pos/NOUN]() (623; 11% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (293; 5% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (282; 5% instances), [bg-pos/ADV]()-[bg-pos/NOUN]() (207; 4% instances), [bg-pos/ADJ]()-[bg-pos/PROPN]() (79; 1% instances), [bg-pos/ADJ]()-[bg-pos/PRON]() (71; 1% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (39; 1% instances), [bg-pos/VERB]()-[bg-pos/ADP]() (26; 0% instances), [bg-pos/ADV]()-[bg-pos/PRON]() (24; 0% instances), [bg-pos/VERB]()-[bg-pos/NUM]() (23; 0% instances), [bg-pos/VERB]()-[bg-pos/DET]() (16; 0% instances), [bg-pos/ADV]()-[bg-pos/PROPN]() (14; 0% instances), [bg-pos/DET]()-[bg-pos/NOUN]() (8; 0% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (6; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADJ]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/ADJ]() (2; 0% instances), [bg-pos/DET]()-[bg-pos/PRON]() (2; 0% instances), [bg-pos/NOUN]()-[bg-pos/NOUN]() (2; 0% instances), [bg-pos/VERB]()-[bg-pos/VERB]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/DET]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/DET]() (1; 0% instances), [bg-pos/DET]()-[bg-pos/PROPN]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/NUM]()-[bg-pos/NOUN]() (1; 0% instances), [bg-pos/NUM]()-[bg-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	След	след	ADP	R	_	2	case	_	_
2	седмица	седмица	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	obl	_	_
3	отиде	отида-(си)	VERB	Vppif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	у	у	ADP	R	_	5	case	_	_
5	Ганини	ганини	PROPN	H-pi	Definite=Ind|Number=Plur	3	iobj	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl	color:blue
1	Присъстващите	присъствам	ADJ	Vpiicar-p-d	Aspect=Imp|Definite=Def|Degree=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	4	nsubj	_	_
2	на	на	ADP	R	_	3	case	_	_
3	събранието	събрание	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	1	obl	_	_
4	сложиха	сложа-(се)	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	подписите	подпис	NOUN	Ncmpd	Definite=Def|Gender=Masc|Number=Plur	4	obj	_	_
6	си	свой	PRON	Psxto	Case=Nom|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Името	име	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	4	nsubj	_	_
2	му	мой	PRON	Psot--3--m	Person=3|Poss=Yes|PronType=Prs	1	det	_	_
3	ще	ще	AUX	Tx	_	4	aux	_	_
4	прогърми	прогърмя	VERB	Vppif-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	в	в	ADP	R	_	6	case	_	_
6	София	софия	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	4	punct	_	_

~~~


