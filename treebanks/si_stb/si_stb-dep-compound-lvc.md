---
layout: base
title:  'Statistics of compound:lvc in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="si_stb-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="si_stb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="si_stb-dep-compound-svc.html">compound:svc</a></tt>.

39 nodes (4%) are attached to their parents as `compound:lvc`.

31 instances of `compound:lvc` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02564102564103.

The following 10 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (20; 51% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (5; 13% instances), <tt><a href="si_stb-pos-PART.html">PART</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (5; 13% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:lvc	color:blue
1	මේ	මේ	PRON	_	_	4	nmod	_	_
2	පිළිබඳ	පිළිබඳ	ADP	_	AdpType=Post	1	case	_	_
3	වැඩි	වැඩි	ADJ	_	Degree=Pos	4	amod	_	_
4	විස්තර	විස්තර	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
5	පසුව	පසුව	PART	_	_	6	advmod	_	_
6	හෙළිදරව්	හෙළිදරව්	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut	0	root	_	_
7	වනු	වෙ	VERB	_	Aspect=Prosp|Mood=Ind|VerbForm=Ger|Voice=Pass	6	compound:lvc	_	_
8	ඇත	ඇත	AUX	_	VerbForm=Fin	7	aux	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:lvc	color:blue
1	උද්ධමනය	උද්ධමන	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
2	ශීඝ්‍ර	ශීඝ්‍ර	ADV	_	AdvType=Man	5	advmod	_	_
3	ලෙස	ලෙස	PART	_	AdpType=Post	2	case	_	_
4	ඉහළ	ඉහළ	NOUN	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	5	compound:lvc	_	_
5	යෑම	ය	NOUN	_	Case=Acc|Definite=Def|Number=Sing|VerbForm=Ger	7	csubj	_	_
6	තවත්	තවත්	DET	_	_	7	dep	_	_
7	කාරණයෙකි	කාරණය	NOUN	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:lvc	color:blue
1	මෙහි	මේ	ADV	_	AdvType=Loc	6	advmod	_	_
2	දී	දී	PART	_	AdpType=Post	1	case	_	_
3	අයථා	අයථා	NOUN	_	Case=Nom	4	nmod	_	_
4	ක්‍රියා	ක්‍රියා	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
5	ගණනාවක්	ගණන	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	dep	_	_
6	සිදු	සිදු	PART	_	_	0	root	_	_
7	වී	වෙ	VERB	_	Tense=Past|VerbForm=Part	6	compound:lvc	_	_
8	ඇත	ඇත	AUX	_	Aspect=Perf|VerbForm=Fin	7	aux	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


