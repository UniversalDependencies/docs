---
layout: base
title:  'Statistics of det in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `det`

This relation is universal.
There are 3 language-specific subtypes of `det`: <tt><a href="sq_staf-dep-det-adj.html">det:adj</a></tt>, <tt><a href="sq_staf-dep-det-poss.html">det:poss</a></tt>, <tt><a href="sq_staf-dep-det-pron.html">det:pron</a></tt>.

223 nodes (6%) are attached to their parents as `det`.

219 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08968609865471.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-DET.html">DET</a></tt> (114; 51% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (54; 24% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-DET.html">DET</a></tt> (21; 9% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-DET.html">DET</a></tt> (20; 9% instances), <tt><a href="sq_staf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_staf-pos-DET.html">DET</a></tt> (6; 3% instances), <tt><a href="sq_staf-pos-NUM.html">NUM</a></tt>-<tt><a href="sq_staf-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sq_staf-pos-ADV.html">ADV</a></tt>-<tt><a href="sq_staf-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	Ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	5	cop	_	_
2	pa	pa	ADP	_	_	3	case	_	_
3	dyshim	dyshim	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	_
4	dhe	dhe	ADV	_	_	5	advmod	_	_
5	skica	skicë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
6	më	më	ADV	_	_	8	advmod	_	_
7	e	e	DET	_	Case=Nom|Gender=Fem|Number=Sing	8	det:adj	_	_
8	bukur	bukur	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	5	amod	_	_
9	e	e	DET	_	Gender=Fem|Number=Sing	10	det	_	_
10	koleksionit	koleksion	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod:poss	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Për	për	ADP	_	_	3	case	_	end_char=87|start_char=84
2	asnjë	asnjë	PRON	_	PronType=Ind	3	det	_	end_char=93|start_char=88
3	shkak	shkak	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	end_char=100|start_char=99
5	për	për	ADP	_	_	7	case	_	end_char=104|start_char=101
6	asnjë	asnjë	PRON	_	PronType=Ind	7	det	_	end_char=110|start_char=105
7	arsye	arsye	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	end_char=117|start_char=116

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Mendja	mendje	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	end_char=594|start_char=588
2	e	e	DET	_	Gender=Fem|Number=Sing	3	det	_	end_char=596|start_char=595
3	kujt	kujt	PRON	_	Case=Gen|Number=Sing|PronType=Int	1	nmod	_	end_char=601|start_char=597
4	flet	fles	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=606|start_char=602
5	me	me	ADP	_	_	6	case	_	end_char=609|start_char=607
6	gojën	gojë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	4	obl	_	end_char=615|start_char=610
7	e	e	DET	_	Gender=Fem|Number=Sing	8	det	_	end_char=617|start_char=616
8	tij	tij	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	end_char=621|SpaceAfter=No|start_char=618
9	?	?	PUNCT	_	_	4	punct	_	end_char=622|start_char=621

~~~


