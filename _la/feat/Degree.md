---
layout: feature
title: 'Degree'
shortdef: 'degree'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cmp">Cmp</a></td>
  <td><a href="#Dim">Dim</a></td>
  <td><a href="#Equ">Equ</a></td>
  <td><a href="#Pos">Pos</a></td>
  <td><a href="#Abs">Abs</a></td>
</tr>
</table>

[Work in progress for `Abs`, `Cmp`]

Degree of comparison is typically an inflectional feature of [adjectives](la-pos/ADJ) (or adjectival form like [participles](la-feat/VerbForm)) and consequently of derived [adverbs](la-pos/ADV), but is not limited to them.

### <a name="Abs">`Abs`</a>: absolute (traditionally "superlative")

This value implies the highest degree of a given quality or other aspect. It can be made relative specifying the group for which it is considered the highest.

#### Examples

* ***pulchrissimum*** 'most beautiful (n.)', , from *pulcher* 'beautiful' (`ADJ`)
    * so *pulchrissimum Romae templorum* would be the 'most beautiful' with respect to (all) Roman temples'

### <a name="Cmp">`Cmp`</a>: comparative

This value implies a difference between two elements under a given aspect.

#### Examples

* ***pulchrior*** 'rather/more beautiful (f./m.)', from *pulcher* 'beautiful' (`ADJ`)

### <a name="Equ">`Equ`</a>: equative (debatable)

Vedi tam, tantus, ecc: dimostrativo? Hanno grado? Comaprative di uguaglianza

#### Examples

* ***tam*** 'as', cognate of *tantus* 'that much' (`DET`)

### <a name="Dim">`Dim`</a>: diminutive form of a word

A diminutive form denotes a smaller or under some aspect "lesser" version of what is referred to by the base word (the "primitive"), and is in this sense a kind of comparative, and therefore linked to the notion of degree. The diminutive may originally have, and in many cases maintain, a literal meaning ("smaller"), or often assume connotations of endearment ("nice", "dear") or also contempt ("less worthy", "weaker", "miserable"). We expect a diminutive form to appear associated to a word with lexical content, most often to a [noun](la-pos/NOUN); thus, functional words like adpositions, pronouns, determiners and so on are usually excluded (as a diminutive does not make much sense for them). The part of speech is usually not affected by this derivation (without taking in account `PROPN`), but in case of nouns the gender is sometimes changed. In some cases, the diminutive form of a modifier word may be understood as referred to its (possibly implicit) syntactic head rather than to the quality or else expressed by the modifier, and may be arise in "agreement" with its diminutive form, e.g. *sicilicula argenteola* 'small silver sickle' Plaut. Rud. 4.4.125, where the small sickle (*sicilicula*, `NOUN`) is no less of silver (*argenteolus*, from *argenteus*, `ADJ`) than a normal one (cf. Petersen, 1916). 

Historically, many Latin *cognomina*, and consequently *gentilicia*, but also *praenomina*, are derived from the diminutive form of a (possibly lost) primitive, e.g. *Aulus* from *auulus* 'little grandfather', from *auus* 'grandfather' (see Chase, 1897).

What are traditionally labelled as "frequentative" (or "iterative", or "intensive") verbs can be also traced back to diminutive forms: they represent an action which is attenuated in quantity or quality (e.g. *haesito* 'to be uncertain, to hesitate' vs. *haereo* 'to stick, to hold fast'), or an event that is subdivided in smaller events of similar kind (e.g. *curso* 'to run to and fro (many times)' vs. *curro* 'to run (once, continuously)'), hence the iterative reading; and from the latter, sometimes an intensive reading (the sum of many actions as a greater action) becomes possible (cf. Audring et al., 2021).

#### Examples

* ***clanculum*** 'secretly, by stealth', from *clam* 'id.' (`ADV`/`ADP`)
* ***paulatim*** 'by little and little' (`ADV`), formed on *paulus* 'small' (`ADJ`), diminutive forme of *paruus* 'little' (`ADJ`)
* ***tantulus*** 'that little', from *tantus* 'of that size' (`DET`)
* ***homunculus*** 'small, weak man; manikin', from *homo* 'man', gen. sing. *hominis* (`NOUN`)
* ***flosculus*** 'small flower', from *flos* 'flower', gen. sing. *floris* (`NOUN`)
* ***umbella*** 'small shadow; parasol' from *umbra* 'shadow' (`NOUN`)
    * this form arises from regular phonological processes of weakening/metathesis and assimilation, i.e. *umbra* > *umbrula* > *umbrela*/*umbrla* > *umberla* > *umbella* (see Miller, 2012, for a survey of formation processes)
* ***scurrula*** 'little buffoon', from *scurra* 'dandy; jester' (`NOUN`)
    * note that the diminutive form keeps the same [inflectional class](la-feat/InflClass) (first declension) of the primitive, also keeping the same gender
* ***ranunculus*** 'tadpole', frome *rana* 'frog' (`NOUN`)
    * note the change in gender from feminine to masculine 
* ***puella*** '(small) girl', originally from *puer* 'child', then specialised to 'male child, boy' parallelly to the lexicalisation of *puella* 
* ***surdaster*** 'somewhat, not totally deaf', from *surdus* 'deaf' (`ADJ`)
* ***loquaculus*** 'somewhat loquacious', or also referred to the modified noun, from *loquax* 'talkative', gen. sing. *loquacis* (`ADJ`)
* ***caesullus*** 'with grey/blue-grey eyes', used especially and hypocoristically for girls (*caesullae*) and as cognomen (e.g. *Caesulla*), from *caesius* 'id.' (`ADJ`)
    * possibly related to *caelum* 'sky, heaven' (`NOUN`), from which note *caerulus*/*caeruleus* 'blue' (`ADJ`), itself also a diminutive form 
* ***Romulus*** (`PROPN`), apparently derived from *Roma* 'Rome' (`PROPN`), of which he is the legendary founder
* ***dormito*** 'to feel sleepy, to drowse', from *dormio* 'to sleep' (`VERB`)
* ***quasso*** 'to move to and fro, to shake repeatedly', from *quatio* 'to shake, agitate' (`VERB`)

### <a name="Pos">`Pos`</a>: positive (deprecated)

This value is traditionally used to denote the form of an adjectival element (or the corresponding adverb) which is neither comparative nor "superlative" (i.e. absolute in UD terms). It is however problematic as any definition "by negation": a positive form is simply a form not marked for `Degree`, and as such no particular label is needed. 

It further raises the problem of distinguishing during annotation between those words which admit, or better *might* admit, a comparative/absolute form, and those that do not, since the label of "positive" implies the other values, too. This distinction is however ultimately semantic/pragmatic and often unpredictable. For example, all base forms of adjectives ([`ADJ`](la-pos/ADJ)) might be *a priori* labelled for `Degree=Pos`, but then, besides *fortis* 'strong', which can be naturally scaled as *fortior* 'stronger' and *fortissimus* 'strongest', there are terms of [nationality](la-feat/NameType#Nat) such as *romanus* 'Roman' which are normally not, if ever, attested in the comparative or absolute degree: one either is *romanus*, or is not (cf. Stassen, 2003, §5). Similarly, an expression like *viridissimus* 'greenest' is not entirely transparent without context, i.e. with respect to how something can be said to achieve the highest degree of greenness (even if there might be e.g. different *shades* of green). The contrast is even starker for adverbs ([`ADV`](la-pos/ADV)): here a rather artificial intra-class distinction has to be made between adverbs derived from an adjectival basis, e.g. *fortiter* 'strongly' form *fortis* (`ADJ`), and those derived from other bases, e.g. *partim* 'partly' from *pars* (`NOUN`), or "proper" adverbs, e.g. *palam* 'publicly', but nothing prevents to observe *particulatim* (a diminutive form of *partim*, as *particula* is to *pars*), *clanculum* (diminutive form of *clam* 'secretly', with no identifiable primitive) or *saepissime* (absolute form of *saepe* 'often', from a reconstructed adjective *saepis* 'frequent', already archaic in Classical times and never attested in the positive form). On the same note, non-lexical parts of speech such as `DET` should logically never be assigned a positive degree, but then we observe *ipsimus* 'most himself' from *ipse* '(him)self' (cf. Perseus `phi0972.phi001.perseus-lat1.xml@769`; giving then rise e.g. to it. *medesimo* 'selfsame', from [*metipsimus*](la-feat/Form)) and *tuissimus* 'most your(s)' from *tuus* 'your(s)' (cf. entry in Du Cange). It is however doubtful that, given similar possible occurrences, all `DET`s should be then marked with `Degree=Pos`: there is no added information in doing so, as there is not in marking all [`NOUN`s](la-pos/NOUN) (or `ADJ`s, or any other part of speech) for it because they *might* assume a diminutive form. Similarly, a positive [`Polarity`](la-feat/Polarity) is not annotated in Latin. Finally, there are classes of adjectives (e.g. ending those ending in *-eus* or *-ius*) that are not allowed to combine with comparative or absolute suffixes, and so for them the value `Pos` is not motivated, and even more so since they can nonethless be made express a degree by means of auxiliary elements such as the adverbs *magis* 'more' and *maxime* 'most', themselves displaying a morphological degree. 


The general suggestion is thus to eschew the use of the label `Pos`, as it is not motivated on any real morpholexical ground, if not that to "fill a gap" in a perceivedly tripartite system.

#### Examples

* ***pulchre*** 'beautifully', from *pulcher* 'beautiful' (`ADJ`)
* ***bene*** 'well' (`ADV`), idiosyncratic adverbial form of *bonus* 'good'
    * this form being in a paradigmatic relation with *melius* (from *melior* 'better') and *optime* (from *optimus* 'best'), it might be assigned the `Pos` label
* ***tres*** 'three' (`NUM`), while formally being a "positive" form (i.e. not comparative nor absolute), belongs to a category that is not compatible with the notion of degree, and so is never assigned the value `Pos`
* ***pauonaceus*** 'belonging to a peacock; variegated [like a peacock's tail]' (`ADJ`) is part of a (morphological) class of adjectives which cannot inflect synthetically for degree, probably for phonetical reasons (\**pauonaceior*, **pauonaceissimus*) before even semantical ones, so the notion of ``positive degree'' is actually not applicable here

###Does the positive degree exist?

Spostare qua la discussione, per non appesantire troppo qua sopra


###References

* Audring, Jenny, Sterre Leufkens, and Eva van Lier (2021). *Small events. Verbal diminutives in the languages of the world*. Linguistic Typology at the Crossroads 1 (Comparative Constructions across languages), no. 1: 223–256. At `https://typologyatcrossroads.unibo.it/article/view/13427`.
* Chase,  George  Davis (1897).  *The  Origin  of  Roman  Praenomina*. Harvard  Studies in  Classical  Philology 8: 103–184. At `https://www .jstor.org /stable/310491`.
* Miller, Ian Andreas (2012). *The Formation of Latin Diminutives of Nouns and Adjectives*. Survey. University of Alberta. At `https://www.researchgate.net/publication/323534846_The_Formation_of_Latin_Diminutives_of_Nouns_and_Adjectives`.
* Petersen, Walter (1916). *Latin Diminution of Adjectives*. Classical Philology 11, no. 4:426–451. At `https://www.journals.uchicago.edu/doi/10.1086/358864`.
* Stassen,  Leon (2003). *Intransitive  Predication*.  Oxford  Studies  in  Typology  and  Linguistic Theory. Oxford, UK: Oxford University Press.







