---
layout: base
title:  'Kangri UD'
udver: '2'
---

# UD for Kangri <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

•	In general, words are delimited by whitespace characters. Description of exceptions follows. 

•	According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word, while others (e.g., the sentence-terminating danda) are not. We tokenize punctuation as separate tokens (words).



## Morphology

### Tags

•	Kangri uses all 17 universal POS categories, including particles (PART).

•	Kangri has the following auxiliary verbs (AUX):

     है hai and था thā are present and past equivalents of “to be”. They are used as copulas and in periphrastic tenses.
     
     रह raha (“to stay”) for the progressive aspect (with the stem of the main verb and the auxiliary ह/था).
     
     कर kara (“to do”) for the habitual aspect (with the perfective participle of the main verb).
     
     जा jā (“to go”) for the passive (with the perfective participle of the main verb).
     
•	Modal auxiliaries:

     सक saka (“be able, can”)
     
     पौणा pāna (“to manage”)
     
     चाहिदा cāhida (“needed, should, ought to”)
     
     हो ho (“to have to”)
     
     पड़ paṛa (“must”)
     
•	Phase verbs:

     लग laga (“to start”)

     चुक cuka (“to finish”)

•	The current data treats verbs as auxiliaries and also some verbs that regularly appear in compound verbs as semantically less salient element. Since compound verbs are not periphrastic tense/aspect/voice forms, these verbs do not fit well in the UD definition of auxiliaries, and they shall be given a different analysis in the future releases. The following verbs are used as semantic auxiliaries in compound verbs:
 
     जा jā (“to go”) (note that this verb can also be used as real auxiliary in passives)
     
     ले le (“to take”)

     दे de (“to give”)

     सुटणा sutana (“to throw”)

     बैठ baiṭha (“to sit”)
 
     उठ uṭha (“to rise”)
 
     रख rakha (“to keep”)

     आ ā (“to come”)

## Syntax


in Kangri, a discourse is made up of sentences which are of different structure and are marked by intonation and terminal contour. In a conversation discourse a sentence maybe constructed of a single word in addition to information. All single words except postpositions and particles can make a sentence. कुण ? , कुथू ? , फिरी.
The sentences in Kangri are of two types in view of their nature of construction. They are (1) elementary and (2) Core or Kernel. The elementary sentences are obtained from the core or kernel sentences by way of transformation that is they can be expanded from or reduced to the kernel or the basic sentences types.
Nominal subject (nsubj) is mostly a noun ( राधा )or pronoun ( तिन्ना, तिन्ने ) phrase in the nominative case in Kangri. For the purpose of UD the objects are divided to core objects, obj  ( किताब ) or iobj  ( मोहने जो ) Aux. verbs mostly enhance the intensity of the verb ( तिन्नी राजुए जो किताब दित्ती and तिन्नी राजुए जो किताब देई दित्तियो / देई छड्डियो )


## Treebanks

There are only one Kangri UD treebanks:

•	Kangri-KDTB [Kangri-KDTB-treebank](https://github.com/UniversalDependencies/UD_Kangri-KDTB/tree/dev)

---
