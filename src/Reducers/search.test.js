import search from './search'



describe('search',()=>{
    it('should return the initial state', () => {
        expect(search(undefined, {})).toEqual({
            photos:[],
            text:'',
            loading:false,
            error:false,
            page:1,
            maxPage:null
        });
    });
    it('should handle GET_POST_START', () => {
        const startAction = {
            type: 'REQUEST_PHOTO'
        };
        expect(search({}, startAction)).toEqual({"loading": true});
    });

});