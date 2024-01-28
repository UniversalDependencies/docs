---
layout: base
title:  'Statistics of nsubj:cop in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="apu_ufpa-dep-nsubj.html">nsubj</a></tt>.

11 nodes (1%) are attached to their parents as `nsubj:cop`.

8 instances of `nsubj:cop` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45454545454545.

The following 8 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="apu_ufpa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="apu_ufpa-pos-PROPN.html">PROPN</a></tt>-<tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:cop	color:blue
1	Kamarapu	Kamarapu	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Possessed=No	2	nsubj:cop	_	GTtags=Prop,Msc,Sg,NPossd,Nom
2	nyry	yry	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Possessed=Yes	0	root	_	GTtags=Msc,Sg,PxSg1,Possd,Nom|SpaceAfter=No
3	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:cop	color:blue
1	Kiripa	kiripa	PRON	Pron	Gender=Masc|PronType=Int	0	root	_	GTtags=Interr,Msc
2	pywãka	wãkatxi	NOUN	N	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=2|Possessed=Yes	1	nsubj:cop	_	GTtags=Msc,Sg,PxSg2,Possd,Nom|SpaceAfter=No
3	?	?	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:cop	color:blue
1	Kutxi	Kutxi	ADV	Adv	_	3	advmod	_	gloss[pt]=por.isso
2	aiku	aiku	NOUN	XPOS=casa	Case=Nom|Gender=Masc	3	nsubj:cop	_	gloss[pt]=casa
3	kasunakyry	kasunaky	VERB	XPOS=ATRIB	Derivation=Proprietive|Gender[subj]=Masc|Number[subj]=Sing|Person[subj]=3|VerbType=Vido	0	root	_	gloss[pt]=ATRIB-boca.de-NC.pequeno-3SG.M.O|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


