import { ChapterComponent } from "../chapter-component/models";
import { Guideline } from "../guideline/models";

export const GUIDELINES_MOCK: Guideline[] = [
    {
        id: 1,
        title: 'Guideline 1',
        description: 'Guideline 1 description',
        chapters:[
            {
                id: 1,
                title: 'Chapter 1',
                chapterComponents: [
                    {
                        id: 1,
                        title: 'Component 1',
                        description: 'Lorem ipsum',
                        code: 'XYZ1'
                    },
                    {
                        id: 3,
                        title: 'Component 3',
                        description: 'Lorem ipsum',
                        code: 'XYZ3'
                    },
                    {
                        id: 5,
                        title: 'Component 5',
                        description: 'Lorem ipsum',
                        code: 'XYZ5'
                    }
                ]
            },
            {
                id: 2,
                title: 'Chapter 2',
                chapterComponents: [
                    {
                        id: 1,
                        title: 'Component 1',
                        description: 'Lorem ipsum',
                        code: 'XYZ1'
                    },
                    {
                        id: 2,
                        title: 'Component 2',
                        description: 'Lorem ipsum',
                        code: 'XYZ2'
                    }
                ]
            },
            {
                id: 3,
                title: 'Chapter 3',
                chapterComponents: []
            }
        ]
    },
    {
        id: 2,
        title: 'Guideline 2',
        description: 'Guideline 2 description',
        chapters:[
            {
                id: 1,
                title: 'Chapter 1',
                chapterComponents: []
            },
            {
                id: 2,
                title: 'Chapter 2',
                chapterComponents: []
            },
        ]
    },
    {
        id: 3,
        title: 'Guideline 3',
        description: 'Guideline 3 description',
        chapters:[]
    },
    {
        id: 4,
        title: 'Guideline 4',
        description: 'Guideline 4 description',
        chapters:[]
    },
    {
        id: 5,
        title: 'Guideline 5',
        description: 'Guideline 5 description',
        chapters:[]
    }
]


export const COMPONENTS_MOCK: ChapterComponent[] = [
    {
        id: 1,
        title: 'Component 1',
        description: 'Lorem ipsum',
        code: 'XYZ1'
    },
    {
        id: 2,
        title: 'Component 2',
        description: 'Lorem ipsum',
        code: 'XYZ2'
    },
    {
        id: 3,
        title: 'Component 3',
        description: 'Lorem ipsum',
        code: 'XYZ3'
    },
    {
        id: 4,
        title: 'Component 4',
        description: 'Lorem ipsum',
        code: 'XYZ4'
    },
    {
        id: 5,
        title: 'Component 5',
        description: 'Lorem ipsum',
        code: 'XYZ5'
    },
    {
        id: 7,
        title: 'Component 7',
        description: 'Lorem ipsum',
        code: 'XYZ7'
    },
    {
        id: 8,
        title: 'Component 8',
        description: 'Lorem ipsum',
        code: 'XYZ8'
    },
    {
        id: 9,
        title: 'Component 9',
        description: 'Lorem ipsum',
        code: 'XYZ9'
    },
    {
        id: 10,
        title: 'Component 10',
        description: 'Lorem ipsum',
        code: 'XYZ10'
    },
    {
        id: 11,
        title: 'Component 11',
        description: 'Lorem ipsum',
        code: 'XYZ11'
    },
    {
        id: 12,
        title: 'Component 12',
        description: 'Lorem ipsum',
        code: 'XYZ12'
    },
    {
        id: 13,
        title: 'Component 13',
        description: 'Lorem ipsum',
        code: 'XYZ13'
    },
    {
        id: 14,
        title: 'Component 14',
        description: 'Lorem ipsum',
        code: 'XYZ14'
    },
    {
        id: 15,
        title: 'Component 15',
        description: 'Lorem ipsum',
        code: 'XYZ15'
    }
]