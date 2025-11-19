import Button from '@/components/common/Button';

const About: React.FC = () => {
    return (
        <div className='p-6'>
            <h1>About Page</h1>

            <div className='p-4 flex gap-4'>
                <Button size='small' shape='rounded-sm'>
                    Button One
                </Button>
                
                <Button size='medium' shape='rounded-md'>
                    Button Two
                </Button>

                <Button size='large' shape='rounded-full'>
                    Button Three
                </Button>
            </div>
        </div>
    )
}

export default About;